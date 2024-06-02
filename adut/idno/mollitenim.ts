class ResourceContainer {
  private _resources: any; // Ideally, replace 'any' with a more specific type

  constructor(resources: any) {
    this._resources = resources;
  }

  // Getter to access the resources
  public get resources(): any {
    return this._resources;
  }

  // Setter to update the resources
  public set resources(newResources: any) {
    this._resources = newResources;
  }
}

// Usage
const resourcesInstance = new ResourceContainer(initialResources);
