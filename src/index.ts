import qs from 'querystring'

export type ValuesParam = {
  username?: string,
  password?: string,
  hostname: string,
  port: number,
  database: string,
  options?: {
    // TODO: look to use MongoClientOptions from mongodb
    [key: string]: any
  }
}

export function createMongoDbUrl(values: ValuesParam): string {
  // init the template of mongodb url
  let template = `mongodb://<username>:<password>@<hostname>:<port>/<database>`

  // remove the username and password section from the template
  // when we can't resolve the username and the password
  if (!values.username || !values.password) {
    template = template.replace('<username>:<password>@', '')
  }

  // prepare the mongodb url
  for (const key in values) {
    template = template.replace(`<${key}>`, values[key])
  }

  // stringify all options if exist then add it to mongodb url
  if (values.options) {
    const queryOptions = qs.stringify(values.options)
    template = `${template}?${queryOptions}`
  }

  // return the mongodb url
  return template
}
