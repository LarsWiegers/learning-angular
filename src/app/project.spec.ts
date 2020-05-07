import { Project } from './project';

describe('Project', () => {
  it('should create an instance', () => {
    expect(new Project('test', '1', 'test', 'test', '', 'https://images.unsplash.com/photo-1569124589354-615739ae007b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=70&q=60')).toBeTruthy();
  });
});
