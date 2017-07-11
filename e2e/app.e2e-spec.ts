import { NestSamplePage } from './app.po';

describe('nest-sample App', () => {
  let page: NestSamplePage;

  beforeEach(() => {
    page = new NestSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
