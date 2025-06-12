import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star,
  Sparkles,
  Shirt,
  Home as HomeIcon,
  Bed,
  Package,
  Percent,
  ChevronRight,
  Leaf,
  Heart,
  Scissors,
  Truck,
  Layers,
  Grid3X3
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'eco-friendly', 'services', 'discount', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Dry Cleaning',
      description: 'Professional dry cleaning for delicate fabrics, formal wear, and specialty garments. Expert care for your most precious clothing.',
      icon: Sparkles,
      price: 'Starting at $8.99'
    },
    {
      title: 'Laundry',
      description: 'Complete wash and care service for everyday clothing. Fresh, clean, and perfectly pressed garments ready when you need them.',
      icon: Shirt,
      price: 'Starting at $2.50/lb'
    },
    {
      title: 'Sheets & Pillowcases',
      description: 'Luxurious cleaning and pressing of bed linens. Wake up to crisp, fresh bedding that feels like a five-star hotel.',
      icon: Bed,
      price: 'Starting at $12.99/set'
    },
    {
      title: 'Household Items',
      description: 'Specialized cleaning for curtains, drapes, comforters, and other household textiles. Restore freshness to your home.',
      icon: HomeIcon,
      price: 'Custom pricing'
    },
    {
      title: 'Wash & Fold',
      description: 'Convenient wash, dry, and fold service. Drop off your laundry and pick up neatly folded, fresh-smelling clothes.',
      icon: Package,
      price: 'Starting at $1.99/lb'
    },
    {
      title: 'Table Linens & Table Cloth',
      description: 'Professional cleaning and pressing of table linens, tablecloths, and dining accessories. Perfect for special occasions.',
      icon: Grid3X3,
      price: 'Starting at $15.99'
    },
    {
      title: 'Cutting & Cloth Alteration',
      description: 'Expert tailoring and alteration services. Perfect fit guaranteed with professional hemming, resizing, and repairs.',
      icon: Scissors,
      price: 'Starting at $12.99'
    },

    {
      title: 'Pickup And Drop',
      description: 'Enjoy hassle-free door-to-door pickup and drop service within 8 miles. Orders over $100 get free delivery; a $20 fee applies for orders under $100.',
      icon: Truck,
      price: 'Starting at $8.99'
    },
    {
      title: 'Carpet Cleaning',
      description: 'Deep and gentle carpet cleaning that removes dirt, stains, and allergens—leaving your carpets fresh and revitalized.',
      icon: Layers,
      price: 'Starting at $8.99'
    }
  ];

  const specialOffers = [
    {
      title: 'Wash and Fold',
      discount: '15% OFF',
      description: 'Save on our convenient wash and fold service'
    },
    {
      title: 'Cloth Alteration',
      discount: '10% OFF',
      description: 'Professional tailoring at discounted rates'
    },
    {
      title: 'TableCloth and Cuttings',
      discount: '10% OFF',
      description: 'Special pricing for table linens and cutting services'
    },
    {
      title: 'Carpet Cleaning',
      discount: '10% OFF',
      description: 'Deep cleaning for your carpets and rugs'
    },
    {
      title: 'Volume Discount',
      discount: '$500 Gift Card',
      description: 'On orders of more than 1000 Dollar'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-900">
                <Sparkles className="inline-block w-6 h-6 mr-2 text-yellow-500" />
                Designer Cleaners
              </h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'eco-friendly', label: 'Eco-Friendly' },
                { id: 'services', label: 'Services' },
                { id: 'discount', label: 'Discount' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'eco-friendly', label: 'Eco-Friendly' },
                { id: 'services', label: 'Services' },
                { id: 'discount', label: 'Discount' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Video */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="src/v2.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"></div>
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-blue-900/70 z-10"></div>
        
        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Designer Cleaners
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Premium cleaning services for the discerning customer. Quality, convenience, and care in every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Our Services
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
            >
              Get Quote
            </button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Designer Cleaners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 20 years, we've been the trusted choice for premium dry cleaning and laundry services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2005, Designer Cleaners has built a reputation for exceptional quality and outstanding customer service. 
                We combine traditional craftsmanship with modern technology to deliver the finest cleaning results.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team of experienced professionals treats every garment with the care and attention it deserves, 
                ensuring that your clothes look their absolute best.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h4>
              <ul className="space-y-4">
                {[
                  'Expert stain removal techniques',
                  'Eco-friendly cleaning solutions',
                  'Same-day service available',
                  'Free pickup and delivery',
                  'Satisfaction guarantee',
                  'Competitive pricing'
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-3" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section id="eco-friendly" className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Leaf className="w-16 h-16 text-green-200 mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Eco-Friendly Commitment</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
              <blockquote className="text-2xl md:text-3xl font-light text-white mb-6 italic">
                "We believe in protecting our planet while protecting your clothes. 
                Every garment we clean is a step towards a greener future."
              </blockquote>
              <p className="text-green-100 text-lg leading-relaxed">
                At Designer Cleaners, we're committed to environmental responsibility. We use biodegradable, 
                non-toxic cleaning solutions that are gentle on your clothes and kind to the earth. 
                Our energy-efficient equipment and sustainable practices ensure that your cleaning needs 
                are met without compromising our planet's future.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Heart className="w-8 h-8 text-green-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Safe for Family</h3>
                <p className="text-green-100 text-sm">Non-toxic solutions safe for you and your loved ones</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Leaf className="w-8 h-8 text-green-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Biodegradable</h3>
                <p className="text-green-100 text-sm">Environmentally friendly cleaning agents</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Sparkles className="w-8 h-8 text-green-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Energy Efficient</h3>
                <p className="text-green-100 text-sm">Modern equipment that reduces energy consumption</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cleaning solutions tailored to meet all your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-blue-600">{service.price}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Section */}
      <section id="discount" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-6xl mx-auto">
            <Percent className="w-16 h-16 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-4xl font-bold text-white mb-6">Special Offers</h2>
            <p className="text-xl text-blue-100 mb-12">
              Take advantage of our exclusive deals and save on premium cleaning services.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialOffers.map((offer, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{offer.title}</h3>
                  <div className="text-3xl font-bold text-yellow-400 mb-3">{offer.discount}</div>
                  <p className="text-blue-100 mb-4">{offer.description}</p>
                  <button className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                    Claim Offer
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with us today. We're here to help with all your cleaning needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get In Touch */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Phone</p>
                    <p className="text-lg text-gray-600">(770) 965-8700</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <p className="text-lg text-gray-600">info@elitecleaners.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Address</p>
                    <p className="text-lg text-gray-600">Designer Cleaners, 5866 Spout Springs Rd <br/>Flowery Branch, GA 30542</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Hours</p>
                    <p className="text-lg text-gray-600">Mon-Fri: 7AM-7PM<br />Sat: 9AM-3PM<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Google Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-full min-h-[400px]">
                <div className="px-4 py-12 md:px-16 bg-gray-100">
  <h2 className="text-3xl font-bold text-center mb-6">Visit Our Store</h2>
  <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.7916987081326!2d-83.91461102427816!3d34.17724297311024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5ed5e35f4563d%3A0x178d513da824329c!2sDesigner%20Cleaners!5e0!3m2!1sen!2sin!4v1749483067879!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0, minHeight: '400px' }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Designer Cleaners Location"
    />
  </div>
</div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                <Sparkles className="inline-block w-6 h-6 mr-2 text-yellow-500" />
                Designer Cleaners

              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Premium dry cleaning and laundry services with over 20 years of experience. 
                Quality, convenience, and care in every detail.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Dry Cleaning</li>
                <li>Laundry Service</li>
                <li>Wash & Fold</li>
                <li>Household Items</li>
                <li>Table Linens</li>
                <li>Cloth Alteration</li>
                <li>Pickup and Drop</li>
                <li>Carpet Cleaning</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li> (770) 965-8700</li>
                <li>info@elitecleaners.com</li>
                <li>Designer Cleaners</li>
                <li>5866 Spout Springs Rd, Ste A</li>
                <li>Flowery Branch, GA 30542, US </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Designer Cleaners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;