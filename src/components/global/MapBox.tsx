'use client'

import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

const MapboxMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null)

  useEffect(() => {
    if (map.current) return // Initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ 70.6834, 22.3342], // Longitude and Latitude of Gujarat, India
      zoom: 14,
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    })

    map.current.on('click', (e) => {
      const { lng, lat } = e.lngLat
      setCoords({ lat, lng }) // Update the coordinates in the state

      // Add a popup with the latitude and longitude
      new mapboxgl.Popup()
        .setLngLat([lng, lat])
        .setHTML(`<strong>Latitude:</strong> ${lat.toFixed(4)} <br/><strong>Longitude:</strong> ${lng.toFixed(4)}`)
        .addTo(map.current)
    })
  }, [])

  return (
    <div>
      <div ref={mapContainer} className="h-[500px] w-full" />
      {coords && (
        <div className="mt-4 p-4 border bg-white">
          <p><strong>Latitude:</strong> {coords.lat.toFixed(4)}</p>
          <p><strong>Longitude:</strong> {coords.lng.toFixed(4)}</p>
        </div>
      )}
    </div>
  )
}

export default MapboxMap
