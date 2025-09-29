import { Card, CardContent, Badge, Button } from "./ui";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import Image from "next/image";

const instagramPosts = [
  {
    id: 3,
    image: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/unias_vqxexw.jpg",
    caption: "💅 Nail art floral para una ocasión especial. Cada detalle hecho a mano con amor y precisión 🌸",
    likes: 156,
    comments: 31,
    hashtags: ["#nailart", "#flores", "#manicure", "#art"],
    timeAgo: "1 día"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1758188753373-5b01a0fc6d9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWF1dHklMjBzYWxvbiUyMGludGVyaW9yfGVufDF8fHx8MTc1ODM5ODMwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    caption: "🏠 Mi espacio de trabajo, diseñado para que te sientas cómoda y relajada mientras trabajamos en tu belleza ✨",
    likes: 92,
    comments: 18,
    hashtags: ["#salon", "#workspace", "#beauty", "#cozy"],
    timeAgo: "3 días"
  },
  {
    id: 6,
    image: "https://res.cloudinary.com/dpbqntcxi/image/upload/v1758406453/yeibi.life/peinados_aoup1n.jpg",
    caption: "👑 Peinado de quinceañera: elegante y sofisticado para una princesa en su día especial! 🎉",
    likes: 174,
    comments: 28,
    hashtags: ["#quinceanera", "#peinado", "#princess", "#hairstyle"],
    timeAgo: "4 días"
  }
];

export function SocialFeedSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="h-8 w-8 text-black mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold">Sígueme en Instagram</h2>
          </div>
          <p className="text-lg text-[rgba(113,113,130,1)] max-w-2xl mx-auto">
            Mantente al día con mis últimos trabajos, tips de belleza y transformaciones. 
            ¡Sígueme para inspiración diaria!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {instagramPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-shadow">
              <div className="relative">
                <Image
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  className="w-full h-64 object-cover"
                  width={500}
                  height={500}
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-black/50 text-white border-0">
                    <Instagram className="h-3 w-3 mr-1" />
                    {post.timeAgo}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-4">
                <p className="text-sm mb-3 line-clamp-3 text-[rgba(113,113,130,1)]">{post.caption}</p>
                
                <div className="flex flex-wrap gap-1 mb-3 text-[rgba(113,113,130,1)]">
                  {post.hashtags.slice(0, 3).map((hashtag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {hashtag}
                    </Badge>
                  ))}
                  {post.hashtags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{post.hashtags.length - 3} más
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {post.likes}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {post.comments}
                    </div>
                  </div>
                  
                  <Button size="sm" variant="ghost">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button size="lg" asChild>
            <a href="https://www.instagram.com/yeibivc/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Seguir en Instagram
            </a>
          </Button>
          <p className="text-sm text-muted-foreground">
            @yeibivc • 2.5k seguidores • Especialista en belleza
          </p>
        </div>
      </div>
    </section>
  );
}