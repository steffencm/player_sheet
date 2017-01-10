import { PlayerSheetPage } from './app.po';

describe('player-sheet App', function() {
  let page: PlayerSheetPage;

  beforeEach(() => {
    page = new PlayerSheetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
