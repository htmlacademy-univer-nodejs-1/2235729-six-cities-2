export type MockData = {
  coordinates: {
    latitude: number[],
    longitude: number[]
  },
  descriptions: string[],
  names: string[],
  previewImages: string[],
  propertyImages: string[],
  users: {
    names: string[],
    avatars: string[],
    emails: string[],
    passwords: string[]
  }
}
