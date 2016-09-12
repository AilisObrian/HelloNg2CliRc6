import { HelloAg2CliPage } from './app.po';

describe('hello-ag2-cli App', function() {
  let page: HelloAg2CliPage;

  beforeEach(() => {
    page = new HelloAg2CliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
