import { Project } from './project';

describe('Project', () => {
  it('should create an instance', () => {
    expect(new Project("test","1","test", "test","")).toBeTruthy();
  });
});
