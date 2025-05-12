import { useState } from "react";
import type { HistoryTimelineData } from "../utils/types";
import Modal from "./Modal";

interface HistoryTimelineProps {
  items: HistoryTimelineData[];
}

const HistoryTimeline: React.FC<HistoryTimelineProps> = ({ items }) => {
  const [selectedImage, setSelectedImage] =
    useState<HistoryTimelineData | null>(null);

  return (
    <div className="relative border-l border-gray-300 pl-4 sm:pl-6 space-y-10 sm:space-y-12">
      {items.map((item) => (
        <div className="relative" key={item.imagePath}>
          <div className="absolute -left-3 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-start gap-4">
            <img
              src={item.imagePath}
              alt={`Etapa "${item.title}" de El Dorado Air Cargo S.A.S en su evolución logística y empresarial`}
              className="cursor-pointer w-full sm:w-32 h-48 sm:h-32 object-cover rounded-xl border-2 border-blue-300 shadow-md"
              onClick={() => setSelectedImage(item)}
            />
            <div className="w-full">
              <h3 className="text-blue-800 text-lg font-bold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm whitespace-pre-line text-justify">
                {item.text}
              </p>
            </div>
          </div>
        </div>
      ))}

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <div className="flex flex-col items-center font-open-sans">
            <p className="text-center text-blue-800 text-lg font-bold mb-4 px-4">
              {selectedImage.title}
            </p>
            <img
              src={selectedImage.imagePath}
              alt={selectedImage.title}
              className="rounded-xl w-full h-auto max-h-[70vh] object-contain"
            />
          </div>
        )}
      </Modal>
    </div>
  );
};

export default HistoryTimeline;
