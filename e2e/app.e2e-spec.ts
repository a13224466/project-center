import { ProjectCenterPage } from './app.po';

describe('project-center App', function() {
  let page: ProjectCenterPage;

  beforeEach(() => {
    page = new ProjectCenterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
