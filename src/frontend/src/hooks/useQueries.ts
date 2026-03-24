import { useQuery } from "@tanstack/react-query";
import type {
  BlogPost,
  Product,
  Review,
  Service,
  StoreStats,
} from "../backend.d";
import { useActor } from "./useActor";

const STATIC_SERVICES: Service[] = [
  {
    name: "Screen Replacement",
    description:
      "Cracked screen? We replace it with a premium display. Same day service at your doorstep.",
    priceRange: "₹800 - ₹4500",
    durationEstimate: "45-60 min",
    doorstepAvailable: true,
  },
  {
    name: "Battery Replacement",
    description:
      "Battery draining fast? Get a new premium battery installed at your doorstep by our experts.",
    priceRange: "₹500 - ₹1800",
    durationEstimate: "30-45 min",
    doorstepAvailable: true,
  },
  {
    name: "Back Panel Replacement",
    description:
      "Broken back? We replace with original quality panel. Perfect finish guaranteed.",
    priceRange: "₹400 - ₹1500",
    durationEstimate: "45-60 min",
    doorstepAvailable: true,
  },
  {
    name: "Software Fixing",
    description:
      "Stuck in bootloop? Virus? We fix all software issues on-site without losing your data.",
    priceRange: "₹300 - ₹800",
    durationEstimate: "30-90 min",
    doorstepAvailable: true,
  },
  {
    name: "Charging Port / Speaker / Button",
    description:
      "Any physical damage repaired by our certified experts. Fast and reliable.",
    priceRange: "₹350 - ₹1200",
    durationEstimate: "30-60 min",
    doorstepAvailable: true,
  },
  {
    name: "Water Damage Recovery",
    description:
      "Don't give up! Our experts recover water-damaged phones. Advanced restoration techniques.",
    priceRange: "₹600 - ₹2500",
    durationEstimate: "2-48 hours",
    doorstepAvailable: true,
  },
];

const STATIC_PRODUCTS: Product[] = [
  {
    name: "Silicon Phone Cover",
    description: "Soft silicon protective cover",
    brandCompatibility: "All Models Available",
    category: "Cases",
    price: BigInt(199),
  },
  {
    name: "Hard Case Cover",
    description: "Military grade protection hard case",
    brandCompatibility: "All Major Brands",
    category: "Cases",
    price: BigInt(249),
  },
  {
    name: "Leather Flip Cover",
    description: "Premium genuine leather flip cover",
    brandCompatibility: "All Major Brands",
    category: "Cases",
    price: BigInt(349),
  },
  {
    name: "Carbon Textured Case",
    description: "Lightweight carbon fiber textured case",
    brandCompatibility: "All Models Available",
    category: "Cases",
    price: BigInt(299),
  },
  {
    name: "Tempered Glass",
    description: "9H hardness anti-scratch tempered glass",
    brandCompatibility: "All Models Available",
    category: "Screen Guards",
    price: BigInt(149),
  },
  {
    name: "UV Glass Screen Guard",
    description: "Full coverage UV treated screen guard",
    brandCompatibility: "All Major Brands",
    category: "Screen Guards",
    price: BigInt(199),
  },
  {
    name: "Premium Earbuds",
    description: "Deep bass sound premium wireless earbuds",
    brandCompatibility: "Universal",
    category: "Audio",
    price: BigInt(799),
  },
  {
    name: "Fast Charging Cable",
    description: "Braided fast charging cable Type-C/Lightning",
    brandCompatibility: "Universal",
    category: "Cables",
    price: BigInt(299),
  },
];

const STATIC_REVIEWS: Review[] = [
  {
    customerName: "Neha Gupta",
    rating: BigInt(5),
    reviewText:
      "Got my iPhone screen replaced in just 45 minutes at my home! The quality is outstanding and the technician was super professional. Highly recommend AGATE!",
    phoneModel: "iPhone 13",
    date: BigInt(Date.now() * 1000000),
  },
  {
    customerName: "Rohit Mehta",
    rating: BigInt(5),
    reviewText:
      "Ordered a Silicon cover for my Samsung S23 and it fits perfectly. Premium quality at affordable prices. The 10% discount was a bonus!",
    phoneModel: "Samsung Galaxy S23",
    date: BigInt(Date.now() * 1000000),
  },
  {
    customerName: "Priya Patel",
    rating: BigInt(5),
    reviewText:
      "My phone had a battery issue. The technician came within 2 hours and fixed it on the spot. Amazing service, will definitely use again!",
    phoneModel: "OnePlus 11",
    date: BigInt(Date.now() * 1000000),
  },
  {
    customerName: "Arjun Singh",
    rating: BigInt(5),
    reviewText:
      "AGATE is hands down the best phone repair service. Got my back panel replaced and it looks brand new. Expert technicians who know their craft!",
    phoneModel: "Xiaomi 13",
    date: BigInt(Date.now() * 1000000),
  },
  {
    customerName: "Kavya Reddy",
    rating: BigInt(5),
    reviewText:
      "Bought tempered glass and a leather case for my phone. Both are premium quality. Fast delivery and the packing was excellent!",
    phoneModel: "Realme 11 Pro",
    date: BigInt(Date.now() * 1000000),
  },
];

const STATIC_STATS: StoreStats = {
  yearsInBusiness: BigInt(2),
  happyCustomers: BigInt(300),
  repairsDone: BigInt(500),
};

const STATIC_BLOGS: BlogPost[] = [
  {
    title: "5 Signs Your Phone Battery Needs Replacement",
    content:
      "Is your phone battery draining too fast? Here are 5 telltale signs you need a battery replacement...",
    author: "Rahul Sharma",
    date: BigInt(Date.UTC(2025, 5, 15) * 1000000),
    readTime: BigInt(5),
    category: "Tech Tips",
    imageUrl: "",
  },
  {
    title: "Best Phone Cases in 2025: Silicon vs Leather vs Hard Case",
    content:
      "Choosing the right phone case can be overwhelming. Our experts compare the top options...",
    author: "Priya Verma",
    date: BigInt(Date.UTC(2025, 4, 28) * 1000000),
    readTime: BigInt(7),
    category: "Accessories Guide",
    imageUrl: "",
  },
  {
    title: "How to Protect Your Phone Screen: Ultimate Guide",
    content:
      "Your phone screen is the most vulnerable part. Learn how to protect it effectively...",
    author: "Amit Kumar",
    date: BigInt(Date.UTC(2025, 4, 10) * 1000000),
    readTime: BigInt(4),
    category: "Phone Care",
    imageUrl: "",
  },
  {
    title: "Water Damaged Phone? Here's What to Do Immediately",
    content:
      "A water-damaged phone is not always a dead phone. Act fast and follow these expert tips...",
    author: "Rahul Sharma",
    date: BigInt(Date.UTC(2025, 3, 22) * 1000000),
    readTime: BigInt(6),
    category: "Emergency Tips",
    imageUrl: "",
  },
  {
    title: "Why Doorstep Phone Repair is the Future",
    content:
      "Doorstep repair services are revolutionizing how we fix our devices. Here's why...",
    author: "Priya Verma",
    date: BigInt(Date.UTC(2025, 3, 5) * 1000000),
    readTime: BigInt(3),
    category: "Industry Insights",
    imageUrl: "",
  },
];

export function useGetAllServices() {
  const { actor, isFetching } = useActor();
  return useQuery<Service[]>({
    queryKey: ["services"],
    queryFn: async () => {
      if (!actor) return STATIC_SERVICES;
      try {
        const data = await actor.getAllServices();
        return data.length > 0 ? data : STATIC_SERVICES;
      } catch {
        return STATIC_SERVICES;
      }
    },
    enabled: !isFetching,
    placeholderData: STATIC_SERVICES,
  });
}

export function useGetAllProducts() {
  const { actor, isFetching } = useActor();
  return useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      if (!actor) return STATIC_PRODUCTS;
      try {
        const data = await actor.getAllProducts();
        return data.length > 0 ? data : STATIC_PRODUCTS;
      } catch {
        return STATIC_PRODUCTS;
      }
    },
    enabled: !isFetching,
    placeholderData: STATIC_PRODUCTS,
  });
}

export function useGetAllReviews() {
  const { actor, isFetching } = useActor();
  return useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      if (!actor) return STATIC_REVIEWS;
      try {
        const data = await actor.getAllReviews();
        return data.length > 0 ? data : STATIC_REVIEWS;
      } catch {
        return STATIC_REVIEWS;
      }
    },
    enabled: !isFetching,
    placeholderData: STATIC_REVIEWS,
  });
}

export function useGetAllBlogPosts() {
  const { actor, isFetching } = useActor();
  return useQuery<BlogPost[]>({
    queryKey: ["blogPosts"],
    queryFn: async () => {
      if (!actor) return STATIC_BLOGS;
      try {
        const data = await actor.getAllBlogPosts();
        return data.length > 0 ? data : STATIC_BLOGS;
      } catch {
        return STATIC_BLOGS;
      }
    },
    enabled: !isFetching,
    placeholderData: STATIC_BLOGS,
  });
}

export function useGetStoreStats() {
  const { actor, isFetching } = useActor();
  return useQuery<StoreStats>({
    queryKey: ["storeStats"],
    queryFn: async () => {
      if (!actor) return STATIC_STATS;
      try {
        return await actor.getStoreStats();
      } catch {
        return STATIC_STATS;
      }
    },
    enabled: !isFetching,
    placeholderData: STATIC_STATS,
  });
}

export function useSeedData() {
  const { actor, isFetching } = useActor();
  return useQuery({
    queryKey: ["seed"],
    queryFn: async () => {
      if (!actor) return null;
      try {
        await actor.seedData();
        return true;
      } catch {
        return null;
      }
    },
    enabled: !!actor && !isFetching,
    staleTime: Number.POSITIVE_INFINITY,
  });
}
