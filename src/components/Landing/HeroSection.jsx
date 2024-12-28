import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-12">
      <div className="flex flex-col justify-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Bold Designs,
          <br />
          Bold You
        </h1>
        <p className="text-gray-600 max-w-md">
          From Vibrant Prints To White Quotes And Minimalist Designs, Our Tees Are Made For The Fearless, Unapologetic You. Wear It Own It.
        </p>
        <div>
          <Button className="bg-black text-white hover:bg-black/90">
            Start Shopping
          </Button>
        </div>
      </div>
      <div className="relative aspect-[4/3] md:aspect-[16/10]">
        <img src="/placeholder.svg"
          alt="Two people wearing white t-shirts"

          className="object-cover rounded-2xl" />
      </div>
    </div>
  )
}
