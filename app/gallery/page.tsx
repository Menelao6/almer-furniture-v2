'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Navigation } from '@/components/nav'
import { Footer } from '@/components/footer'
import { X } from 'lucide-react'

const dummyGallery = [
  { _id: '1', title: 'Dhomë Ndreje Moderne', roomType: 'living', description: 'Hapësirë ndreje elegante me mobilje kontempore', image: null },
  { _id: '2', title: 'Suite Dhome Gjumi Luksozi', roomType: 'bedroom', description: 'Dizajn dhome gjumi i qetë me shtrat premium', image: null },
  { _id: '3', title: 'Eleganca e Dhomës Ushqim', roomType: 'dining', description: 'Hapësirë ushqimi e sofistikuar për përfundime', image: null },
  { _id: '4', title: 'Zyrë e Shtëpisë', roomType: 'office', description: 'Hapësirë pune profesionale dhe stiloze', image: null },
  { _id: '5', title: 'Kuzhinë Moderne', roomType: 'kitchen', description: 'Dizajn kuzhine kontemporan', image: null },
  { _id: '6', title: 'Banjë Spa', roomType: 'bathroom', description: 'Retigje banje luksozi', image: null },
]

const roomTypes = [
  { value: 'all', label: 'Të Gjitha Dhomat' },
  { value: 'living', label: 'Dhomë Ndreje' },
  { value: 'bedroom', label: 'Dhomë Gjumi' },
  { value: 'dining', label: 'Dhomë Ushqim' },
  { value: 'office', label: 'Zyrë' },
  { value: 'kitchen', label: 'Kuzhinë' },
  { value: 'bathroom', label: 'Banjë' },
]

export default function GalleryPage() {
  const [selectedRoom, setSelectedRoom] = useState('all')
  const [lightboxImage, setLightboxImage] = useState<typeof dummyGallery[0] | null>(null)

  const filteredGallery = selectedRoom === 'all' 
    ? dummyGallery 
    : dummyGallery.filter(item => item.roomType === selectedRoom)

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
              Galeria e Brendshme
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Shfletoni koleksionin tonë të hapësirave të brendshme të dizajnuara bukur me mobiljen tonë luksoz.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold text-foreground mb-4">Filtro sipas Llojit të Dhomës</p>
            <div className="flex flex-wrap gap-2">
              {roomTypes.map((room) => (
                <button
                  key={room.value}
                  onClick={() => setSelectedRoom(room.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedRoom === room.value
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground hover:bg-accent hover:text-accent-foreground'
                  }`}
                >
                  {room.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item) => (
                <button
                  key={item._id}
                  onClick={() => setLightboxImage(item)}
                  className="group relative overflow-hidden rounded-lg aspect-square bg-muted cursor-pointer"
                >
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <p className="text-muted-foreground text-center p-4">{item.title}</p>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                    <div className="w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                      <h3 className="font-serif text-xl font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-white/80 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {filteredGallery.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">
                  No images found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <div className="max-w-4xl w-full">
            <div className="relative w-full aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
              <p className="text-muted-foreground">Image placeholder</p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-semibold text-white mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-white/80">
                {lightboxImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  )
}
