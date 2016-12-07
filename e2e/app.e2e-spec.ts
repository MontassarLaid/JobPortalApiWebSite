import { JobPortalWebappPage } from './app.po';

describe('job-portal-webapp App', function() {
  let page: JobPortalWebappPage;

  beforeEach(() => {
    page = new JobPortalWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
