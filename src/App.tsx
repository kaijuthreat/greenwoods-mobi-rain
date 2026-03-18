import { Phone, Wrench, Clock, MapPin, Engine, Tire, Truck, Gauge, CarProfile, Lightning } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"

function App() {
  const phoneNumber = "(706) 302-0163"

  const services = [
    {
      icon: Engine,
      title: "Engine Diagnostics & Repair",
      description: "Complete engine analysis and repair services at your location"
    },
    {
      icon: Truck,
      title: "Towing & Recovery",
      description: "Fast and reliable towing and vehicle recovery services"
    },
    {
      icon: Tire,
      title: "Tire Services",
      description: "Flat tire repair, replacement, and roadside assistance"
    },
    {
      icon: Wrench,
      title: "General Repairs",
      description: "Oil changes, brake service, and routine maintenance"
    },
    {
      icon: Gauge,
      title: "Electrical Systems",
      description: "Alternator, starter, and electrical diagnostics"
    },
    {
      icon: CarProfile,
      title: "Pre-Purchase Inspections",
      description: "Thorough vehicle inspections before you buy"
    }
  ]

  return (
    <div className="min-h-screen tan-accent-bg text-foreground">
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-primary to-tan z-50" />
      
      <header className="sticky top-1 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
              <Wrench weight="bold" className="text-primary-foreground" size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">GREENWOOD'S</h1>
              <p className="text-xs text-muted-foreground font-body">Mobile Mechanic</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold tracking-wide"
            onClick={() => window.location.href = `tel:${phoneNumber}`}
          >
            <Phone weight="fill" className="mr-2" size={20} />
            CALL NOW
          </Button>
        </div>
      </header>

      <main>
        <section className="relative py-24 md:py-32 overflow-hidden diagonal-stripes">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <Badge className="bg-red text-red-foreground text-sm px-4 py-1 font-heading">
                  <Lightning weight="fill" className="mr-1" size={16} />
                  EMERGENCY SERVICE
                </Badge>
                <Badge className="bg-tan text-tan-foreground text-sm px-4 py-1 font-heading">
                  <Clock weight="fill" className="mr-1" size={16} />
                  24/7 AVAILABLE
                </Badge>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                PROFESSIONAL
                <span className="block text-primary">MOBILE MECHANIC</span>
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
                Expert automotive repair services delivered directly to your location. 
                Day or night, we're here to keep you moving.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="text-2xl px-8 py-7 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold tracking-widest glow-green"
                  onClick={() => window.location.href = `tel:${phoneNumber}`}
                >
                  <Phone weight="fill" className="mr-3" size={28} />
                  {phoneNumber}
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground font-body">
                <MapPin weight="fill" className="inline mr-1" size={16} />
                Serving the Coweta County Area
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card/50 mixed-texture">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-4">OUR SERVICES</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
                Comprehensive mobile mechanic services brought directly to your home, office, or roadside location.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full border-l-4 border-l-tan">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="text-primary" weight="duotone" size={32} />
                      </div>
                      <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base font-body">{service.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 tan-accent-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-4">WHY CHOOSE US</h3>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-tan rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock weight="fill" className="text-tan-foreground" size={32} />
                  </div>
                  <h4 className="text-xl font-heading mb-2">24/7 AVAILABILITY</h4>
                  <p className="text-muted-foreground font-body">
                    Day or night, weekends and holidays. We're always ready to help.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench weight="fill" className="text-primary-foreground" size={32} />
                  </div>
                  <h4 className="text-xl font-heading mb-2">EXPERT SERVICE</h4>
                  <p className="text-muted-foreground font-body">
                    Years of experience with all makes and models. Quality work guaranteed.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin weight="fill" className="text-red-foreground" size={32} />
                  </div>
                  <h4 className="text-xl font-heading mb-2">WE COME TO YOU</h4>
                  <p className="text-muted-foreground font-body">
                    No towing needed. We bring the shop to your location.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card diagonal-stripes border-t-4 border-t-tan">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h3 className="text-4xl md:text-5xl font-bold mb-6">READY TO GET STARTED?</h3>
              <p className="text-xl text-muted-foreground mb-8 font-body">
                Don't let car trouble slow you down. Call now for fast, professional mobile mechanic service.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfbz658-jNCCwfeg-Cx53tmGQZa4NgeRNkJ7K2Dg4sRta8XGA/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="text-2xl px-8 py-7 bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-bold tracking-widest glow-green"
                  >
                    TELL US WHAT YOUR CAR'S PROBLEM IS
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-sm flex items-center justify-center">
                <Wrench weight="bold" className="text-primary-foreground" size={28} />
              </div>
              <div className="text-left">
                <h2 className="text-2xl font-bold">GREENWOOD'S</h2>
                <p className="text-sm text-muted-foreground font-body">24 Hour Mobile Mechanic</p>
              </div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <div>
                <p className="text-lg font-heading mb-2">CONTACT</p>
                <Button 
                  variant="link" 
                  className="text-primary text-xl font-heading tracking-wide"
                  onClick={() => window.location.href = `tel:${phoneNumber}`}
                >
                  <Phone weight="fill" className="mr-2" size={20} />
                  {phoneNumber}
                </Button>
              </div>

              <div>
                <p className="text-sm text-muted-foreground font-body">
                  Professional mobile mechanic services available 24/7
                </p>
                <p className="text-sm text-muted-foreground font-body">
                  Serving the Coweta County Area
                </p>
              </div>
            </div>

            <Separator className="my-6" />

            <p className="text-sm text-muted-foreground font-body">
              © {new Date().getFullYear()} Greenwood's Mobile Mechanic Services. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App