export class Project {
  constructor(
    public name : string,
    public version: string,
    public riskmanager : string,
    public date_created : string,
    public last_change : string) {}

    filter(search_string) {
      return (this.name.includes(search_string) ||
        this.version.includes(search_string) ||
        this.riskmanager.includes(search_string) ||
        this.date_created.includes(search_string) ||
        this.last_change.includes(search_string));
    }
}
