import { TodomaterialappPage } from './app.po';

describe('todomaterialapp App', () => {
  let page: TodomaterialappPage;

  beforeEach(() => {
    page = new TodomaterialappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
