import { ArrowLeft, MapPin, Mail, Phone, Store } from 'lucide-react';

interface ContactPageProps {
  onBack: () => void;
}

export function ContactPage({ onBack }: ContactPageProps) {
  // Placeholder data - will be replaced with actual information
  const contactInfo = {
    shopName: 'mauva.by.mmd',
    address: '#14/15, S.S. Jain Market, M.P. Lane, Chickpet, Bengaluru, India - 560053',
    email: 'mauvabymmd@gmail.com',
    phones: [
      { number: '+918197697480', display: '+91 8197697480', label: 'Retail' },
      { number: '+917676881468', display: '+91 7676881468', label: 'Wholesale' }
    ],
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d602.5039481616519!2d77.5777035012!3d12.969351652117178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae160975c52e05%3A0xf7ffb673986a196d!2sSS%20Jain%20Complex%2C%20Huriopet%2C%20Chickpet%2C%20Bengaluru%2C%20Karnataka%20560053!5e0!3m2!1sen!2sin!4v1760018098596!5m2!1sen!2sin'
  };

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
        <b><h1 className="text-primary">Contact Us</h1></b>
      </div>

      {/* Content */}
      <div className="p-4 pb-24 space-y-4">
        {/* Shop Name */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent rounded-full">
              <Store className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1">Shop Name</h3>
              <p className="text-muted-foreground">{contactInfo.shopName}</p>
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent rounded-full">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1">Address</h3>
              <p className="text-muted-foreground">{contactInfo.address}</p>
            </div>
          </div>
        </div>

        {/* Email */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent rounded-full">
              <Mail className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1">Email</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="text-primary hover:underline"
              >
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="bg-card rounded-lg border border-border p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-accent rounded-full">
              <Phone className="w-6 h-6 text-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="mb-3">Phone</h3>
              <div className="space-y-2">
                {contactInfo.phones.map((phone, index) => (
                  <div key={index}>
                    <a
                      href={`tel:${phone.number}`}
                      className="text-primary hover:underline"
                    >
                      {phone.display}
                    </a>
                    <span className="text-muted-foreground text-sm ml-2">({phone.label})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
          <div className="p-4 border-b border-border">
            <h3 className="text-primary">Find Us</h3>
          </div>
          <div className="relative w-full h-64">
            <iframe
              src={contactInfo.mapEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
