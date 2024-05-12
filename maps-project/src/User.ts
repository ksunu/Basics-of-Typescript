import { faker } from '@faker-js/faker'
import { MapItem } from './Map'

export class User implements MapItem {
  name: string
  location: {
    lat: number
    lng: number
  }
  color: string = 'red'

  constructor() {
    this.name = faker.person.firstName()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }

  markerContent(): string {
    return `User name: ${this.name}`
  }
}