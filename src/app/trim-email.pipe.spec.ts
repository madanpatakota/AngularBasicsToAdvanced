import { TrimEmailPipe } from './trim-email.pipe';

describe('TrimEmailPipe', () => {
  it('create an instance', () => {
    const pipe = new TrimEmailPipe();
    expect(pipe).toBeTruthy();
  });
});
