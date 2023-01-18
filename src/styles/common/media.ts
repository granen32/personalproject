import { CSSProp, css } from 'styled-components'
import { TemplateLiteral } from 'typescript'

type MediaQuerProps = {
  mobile: number
  desktop: number
}

const sizes: MediaQuerProps = {
  mobile: 1023,
  desktop: 1024,
}

type BackQuoteArgs = string[]

const media = {
  mobile: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.mobile}px) {
        ${css(literals, ...args)}
      }
    `,
  desktop: (literals: TemplateStringsArray, ...args: BackQuoteArgs): CSSProp =>
    css`
      @media only screen and (max-width: ${sizes.desktop}px) {
        ${css(literals, ...args)}
      }
    `,
} as Record<
  keyof typeof sizes,
  (l: TemplateStringsArray, ...p: BackQuoteArgs) => CSSProp
>

export default media
