import { StripHTMLPipe } from './strip-html.pipe';

describe('StripHTMLPipe', () => {
  it('create an instance', () => {
    const pipe = new StripHTMLPipe();
    expect(pipe).toBeTruthy();
  });
});
