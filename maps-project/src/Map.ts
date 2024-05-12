export interface MapItem {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
  color: string
}

export class Map {
  googleMap: google.maps.Map

  constructor(divId: string) {
    const mapElement = document.getElementById(divId)
    if (mapElement) this.googleMap = new google.maps.Map(
      mapElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0
        }
      }
    )
  }

  addMarker(item: MapItem): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: item.location.lat,
        lng: item.location.lng
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: item.markerContent(),
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}