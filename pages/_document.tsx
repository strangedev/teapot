import Document from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { DocumentContext, DocumentInitialProps, RenderPageResult } from 'next/dist/next-server/lib/utils';
import React, { ReactElement } from 'react';

export default class MyDocument extends Document {
  public static async getInitialProps (context: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = context.renderPage;

    try {
      // eslint-disable-next-line no-param-reassign
      context.renderPage = (): RenderPageResult | Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp (App): (props: any) => ReactElement {
            return (props): ReactElement =>
              sheet.collectStyles(<App { ...props } />);
          }
        });

      const initialProps = await Document.getInitialProps(context);

      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }
}
