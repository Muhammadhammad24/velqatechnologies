"use client"

import Image from "next/image"
import { Shield, Clock, Users, Award, Globe, Headphones } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption and strict data protection protocols.",
  },
  {
    icon: Clock,
    title: "24/7 Operations",
    description: "Round-the-clock support coverage across all time zones with 99.9% uptime guarantee.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Trained specialists assigned exclusively to your account for consistent quality.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous QA processes with real-time monitoring and continuous improvement.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Operations in USA and Pakistan enabling cost-effective, scalable solutions.",
  },
  {
    icon: Headphones,
    title: "Multichannel Support",
    description: "Seamless integration across phone, email, chat, and social media channels.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-secondary/5 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-primary/5 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full bg-secondary/5 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <AnimatedSection direction="left">
            <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Why Choose Velqa</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
              Enterprise-Grade Solutions Built for Scale
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              We combine cutting-edge technology with human expertise to deliver exceptional customer experiences. Our
              proven track record includes partnerships with industry leaders and Walmart-level campaign management.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/professional-call-center-agent-with-headset-talkin.jpg"
                  alt="Call center professional"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/friendly-customer-support-representative-helping-c.jpg"
                  alt="Customer support representative"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/young-professional-team-meeting-collaboration-dive.jpg"
                  alt="Team collaboration"
                  width={200}
                  height={200}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[
                  "/professional-woman-with-headset-smiling-customer-s.jpg",
                  "/professional-man-at-computer-technical-support-spe.jpg",
                  "/professional-customer-service-agent-with-headset-s.jpg",
                ].map((src, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden hover:scale-110 hover:z-10 transition-transform cursor-pointer animate-slide-up"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <Image
                      src={src}
                      alt="Team member"
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-primary border-2 border-background flex items-center justify-center text-xs font-medium text-primary-foreground">
                  +497
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">500+</span> professionals ready to serve
              </p>
            </div>
          </AnimatedSection>

          {/* Right side - Features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1} direction="right">
                <div className="p-6 rounded-xl bg-background border border-border/50 hover:border-secondary/30 card-hover group">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
