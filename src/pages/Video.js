import React from 'react';
import PageWithSidebar from '../components/PageWithSidebar';
import { motion } from 'framer-motion';

const videos = [
  { id: '65LReyrI2M4', title: 'Video 1: Pelayanan Masyarakat' },
  { id: '1CWM66nVfQM', title: 'Video 2: Program Pemprov Lampung' },
  { id: '7vwX_mG170Y', title: 'Video 3: Sosialisasi Publik' },
];

const Video = () => {
  return (
    <PageWithSidebar>
      <motion.div
        className="max-w-6xl mx-auto space-y-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-yellow-300 text-center">Galeri Video</h1>
          <p className="text-gray-300 mb-6 text-center">
            Kumpulan video kegiatan dan informasi Pemprov Lampung
          </p>

          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {videos.map((video) => (
              <div
                key={video.id}
                className="rounded-lg overflow-hidden shadow-md bg-[#374151] hover:shadow-yellow-200/30 transition duration-300 hover:scale-[1.01]"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-yellow-200">{video.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </PageWithSidebar>
  );
};

export default Video;
