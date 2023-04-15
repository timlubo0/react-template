interface File {
  name:
    | string
    | number
    | boolean
    // rome-ignore lint/suspicious/noExplicitAny: <explanation>
    |  React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | null
    | undefined;
  objectURL: string | undefined;
}
