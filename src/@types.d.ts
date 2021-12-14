declare interface IChoice {
  [key: string]: string;
}

declare module '*.svg' {
  const content: string
  export const ReactComponent = () => null
  export default content
}
