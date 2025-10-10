import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface AboutPageProps {
  onBack: () => void;
}

export function AboutPage({ onBack }: AboutPageProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="bg-card px-4 py-4 border-b border-border flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-primary" />
        </button>
        <b><h1 className="text-primary">About Us</h1></b>
      </div>

      {/* Content */}
      <div className="p-4 pb-24 space-y-4">
        {/* Hero Image */}
        <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1693322845412-b9d7a5e04bd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wYW55JTIwYnVpbGRpbmclMjBleHRlcmlvcnxlbnwxfHx8fDE3NTk5NDgyMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Company Building"
            className="w-full h-48 object-cover"
          />
        </div>

        {/* Story Section with Text */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <b><h2 className="mb-4 text-primary">Our Story</h2></b>
          <p className="text-foreground leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBzcGFjZXxlbnwxfHx8fDE3NTk5MjcyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Workspace"
              className="w-full h-32 object-cover"
            />
          </div>
          <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1728933102332-a4f1a281a621?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBidXNpbmVzc3xlbnwxfHx8fDE3NTk5NDgyMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Our Team"
              className="w-full h-32 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}