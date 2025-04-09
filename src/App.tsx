import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BookOpen, ChevronRight, GraduationCap, Mail, Users } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-7xl font-semibold mb-6 tracking-tight">Nadir Foundation</h1>
          <p className="text-xl font-light tracking-wide opacity-90 max-w-2xl mx-auto">
            Empowering Girls Through Education in Remote Areas
          </p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-background/80 py-6 sticky top-0 z-50 border-y border-primary/10 backdrop-blur-lg">
        <div className="container mx-auto flex justify-center gap-12">
          {["About", "Our Schools", "Mission", "Gallery", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-primary/70 hover:text-primary transition-colors text-sm tracking-widest uppercase font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/nadir-assembly.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            opacity: 0.15
          }}
        />
        <div className="container mx-auto relative z-10 text-center px-4">
          <h2 className="text-7xl font-semibold mb-8 tracking-tight">Every Girl Deserves a Future</h2>
          <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Providing world-class education in English and Sciences to empower the next generation of leaders.
          </p>
          <Button 
            size="lg" 
            className="text-base px-10 py-8 tracking-wider uppercase font-medium hover:translate-x-2 transition-transform group bg-primary hover:bg-primary/90"
          >
            Support Our Mission
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-40 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-24">
            <h2 className="text-6xl font-semibold mb-6">About the Foundation</h2>
            <Separator className="w-24 mx-auto mb-6 bg-primary/20" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              Established with a vision to transform lives through education, 
              the Nadir Foundation stands as a beacon of hope and excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: GraduationCap,
                title: "Academic Excellence",
                description: "Cultivating intellectual curiosity and academic rigor through our distinguished educational programs."
              },
              {
                icon: BookOpen,
                title: "Modern Curriculum",
                description: "Comprehensive education focusing on English proficiency and advanced scientific literacy."
              },
              {
                icon: Users,
                title: "Global Impact",
                description: "Transforming communities through educational empowerment and cultural exchange."
              }
            ].map((item, index) => (
              <Card key={index} className="bg-background border-none luxury-shadow hover:translate-y-[-4px] transition-transform">
                <CardContent className="pt-12 p-8">
                  <div className="text-center">
                    <item.icon className="w-16 h-16 mx-auto mb-6 text-primary" />
                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-40">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl font-semibold mb-16 text-center">Our Mission</h2>
            <Card className="border-none bg-secondary luxury-shadow">
              <CardContent className="p-16">
                <p className="text-2xl text-center font-light leading-relaxed text-muted-foreground">
                  "To uplift communities by educating girls in rural and underserved regions, 
                  fostering empowerment, confidence, and opportunity through quality education 
                  focused on language and scientific skills."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-40 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-6xl font-semibold mb-20 text-center">Gallery</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                src: "/classroom-1.jpg",
                alt: "Teacher engaging with students in classroom"
              },
              {
                src: "/classroom-2.jpg",
                alt: "Students studying together"
              },
              {
                src: "/classroom-3.jpg",
                alt: "Teacher interacting with students"
              },
              {
                src: "/nadir-assembly.jpg",
                alt: "School assembly at Nadir Girls Higher Secondary School"
              },
              {
                src: "/forbes.jpg",
                alt: "Forbes 30 Under 30 Recognition"
              },
              {
                src: "/classroom-4.jpg",
                alt: "Interactive classroom session"
              }
            ].map((img, index) => (
              <Card key={index} className="overflow-hidden border-none luxury-shadow group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-primary text-primary-foreground py-32">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-6xl font-semibold mb-12">Contact Us</h2>
          <div className="flex justify-center items-center gap-3 mb-8">
            <Mail className="w-6 h-6" />
            <a href="mailto:info@nadirfoundation.com" className="text-lg hover:underline">
              info@nadirfoundation.com
            </a>
          </div>
          <Separator className="max-w-md mx-auto opacity-20 my-16" />
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6">Managing Directors</h3>
            <p className="text-primary-foreground/80 text-lg font-light tracking-wide">
              Shaheer Malik · Shahraiz Malik · Daniyal Azhar · Abdul Mutaal · 
              Azhar Malik · Ashraf Malik · Asfandyar Yar Malik
            </p>
          </div>
          <Separator className="max-w-md mx-auto opacity-20 my-16" />
          <p className="text-sm text-primary-foreground/60 tracking-widest uppercase">
            © 2025 Nadir Foundation. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;