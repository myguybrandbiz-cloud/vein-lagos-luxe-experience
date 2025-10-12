import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Instagram, Facebook, Music, Sparkles, Calendar, Users } from "lucide-react";
import veinLogo from "@/assets/vein-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import vipService from "@/assets/vip-service.jpg";
import eventBg from "@/assets/event-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <img 
            src={veinLogo} 
            alt="Vein Lagos Logo" 
            className="w-64 md:w-96 mx-auto mb-8 drop-shadow-2xl hover-scale"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            VEIN LAGOS
          </h1>
          <p className="text-2xl md:text-4xl mb-4 text-accent font-light tracking-wider">
            Feel it Beneath the Skin
          </p>
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto">
            Lagos' Most Exclusive Strip Nightclub Experience
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all transform hover:scale-105 text-lg px-10 py-6 shadow-2xl"
          >
            Reserve Your Experience
          </Button>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
              The Ultimate Luxury Experience
            </h2>
            <Separator className="my-8 bg-primary/30 max-w-xs mx-auto" />
            <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
              Welcome to Vein Lagos, where sophistication meets sensuality. Located in the heart of Lagos, 
              we redefine nightlife with an unparalleled blend of elegance, entertainment, and exclusivity.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Catering exclusively to the 1% of the 1%, our venue offers a sanctuary of indulgence 
              where every detail is crafted to perfection.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Premium Ambiance</h3>
                <p className="text-muted-foreground">World-class interior design with state-of-the-art lighting</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Elite Entertainment</h3>
                <p className="text-muted-foreground">International performers and curated experiences</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-primary">Absolute Privacy</h3>
                <p className="text-muted-foreground">Exclusive VIP sections and personalized service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              VIP Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Indulge in our curated selection of premium services designed for the discerning patron
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={vipService} 
                  alt="VIP Table Service" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-primary">VIP Table Reservations</h3>
                <p className="text-muted-foreground mb-4">
                  Exclusive seating with premium views and dedicated service staff
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Book Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Premium Bottle Service</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Curated selection of champagne, spirits, and rare vintages delivered with flair
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  View Menu
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-primary/20 hover:border-primary/50 transition-all hover-scale">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-primary">Private Events</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  Host your exclusive gatherings with personalized planning and concierge
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Inquire
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section 
        className="py-24 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${eventBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Upcoming Events
            </h2>
            <p className="text-lg text-accent max-w-2xl mx-auto">
              Experience world-class entertainment with our rotating roster of elite performers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-card/90 backdrop-blur border-primary/30 hover:border-primary/60 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">FRIDAY, NOV 15</p>
                    <h3 className="text-2xl font-bold text-foreground">International DJ Night</h3>
                  </div>
                  <Music className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  Featuring world-renowned DJ spinning exclusive sets
                </p>
                <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                  Get Tickets
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/90 backdrop-blur border-primary/30 hover:border-primary/60 transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">SATURDAY, NOV 23</p>
                    <h3 className="text-2xl font-bold text-foreground">Exclusive VIP Gala</h3>
                  </div>
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground mb-4">
                  An invitation-only evening of luxury and sophistication
                </p>
                <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90">
                  Request Invite
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
                Reserve Your Table
              </h2>
              <p className="text-lg text-muted-foreground">
                Experience the pinnacle of luxury nightlife. Contact us to secure your exclusive reservation.
              </p>
            </div>

            <Card className="bg-card border-primary/20">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                      <Input 
                        placeholder="Your full name" 
                        className="bg-background border-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Phone</label>
                      <Input 
                        placeholder="+234 xxx xxx xxxx" 
                        className="bg-background border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Preferred Date</label>
                      <Input 
                        type="date" 
                        className="bg-background border-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Party Size</label>
                      <Input 
                        type="number" 
                        placeholder="Number of guests" 
                        className="bg-background border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Special Requests</label>
                    <Textarea 
                      placeholder="Let us know how we can make your experience exceptional..."
                      rows={4}
                      className="bg-background border-primary/30 focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 transition-all text-lg py-6"
                  >
                    Submit Reservation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-primary/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <img 
                src={veinLogo} 
                alt="Vein Lagos" 
                className="w-32 mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Lagos' most exclusive strip nightclub experience
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Victoria Island, Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+234 xxx xxx xxxx</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>reservations@veinlagos.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Thursday - Saturday</p>
                <p className="text-accent font-semibold">10:00 PM - 5:00 AM</p>
                <p className="text-xs mt-4">By reservation only</p>
              </div>
            </div>
          </div>

          <Separator className="my-8 bg-primary/20" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Vein Lagos. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
