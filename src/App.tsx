import { Navbar } from "./components/sections/Navbar"
import { Hero } from "./components/sections/Hero"
import { LogoBar } from "./components/sections/LogoBar"
import { PlatformOverview } from "./components/sections/PlatformOverview"
import { FeatureTabs } from "./components/sections/FeatureTabs"
import { Stats } from "./components/sections/Stats"
import { Testimonials } from "./components/sections/Testimonials"
import { ModelAgnostic } from "./components/sections/ModelAgnostic"
import { TeamSolutions } from "./components/sections/TeamSolutions"
import { EnterprisePartnership } from "./components/sections/EnterprisePartnership"
// import { IntegrationsSecurity } from "./components/sections/IntegrationsSecurity"
import { IOSApp } from "./components/sections/IOSApp"
// import { TrustBanner } from "./components/sections/TrustBanner"
// import { Pricing } from "./components/sections/Pricing"
import { Footer } from "./components/sections/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <PlatformOverview />
        <FeatureTabs />
        <Stats />
        <Testimonials />
        <ModelAgnostic />
        <TeamSolutions />
        <EnterprisePartnership />
        {/* <IntegrationsSecurity /> */}
        <IOSApp />
        {/* <TrustBanner /> */}
        {/* <Pricing /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App
