import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BlogPost {
    title: string;
    content: string;
    date: Time;
    author: string;
    readTime: bigint;
    imageUrl: string;
    category: string;
}
export type Time = bigint;
export interface StoreStats {
    happyCustomers: bigint;
    repairsDone: bigint;
    yearsInBusiness: bigint;
}
export interface Service {
    doorstepAvailable: boolean;
    name: string;
    description: string;
    priceRange: string;
    durationEstimate: string;
}
export interface Booking {
    serviceType: string;
    name: string;
    message: string;
    address: string;
    timestamp: Time;
    phone: string;
}
export interface Product {
    name: string;
    description: string;
    brandCompatibility: string;
    category: string;
    price: bigint;
}
export interface Review {
    customerName: string;
    date: Time;
    reviewText: string;
    phoneModel: string;
    rating: bigint;
}
export interface backendInterface {
    createBlogPost(blogPost: BlogPost): Promise<bigint>;
    createBooking(booking: Booking): Promise<bigint>;
    createProduct(product: Product): Promise<bigint>;
    createReview(review: Review): Promise<bigint>;
    createService(service: Service): Promise<bigint>;
    deleteBlogPost(id: bigint): Promise<void>;
    deleteBooking(id: bigint): Promise<void>;
    deleteProduct(id: bigint): Promise<void>;
    deleteReview(id: bigint): Promise<void>;
    deleteService(id: bigint): Promise<void>;
    getAllBlogPosts(): Promise<Array<BlogPost>>;
    getAllBookings(): Promise<Array<Booking>>;
    getAllProducts(): Promise<Array<Product>>;
    getAllReviews(): Promise<Array<Review>>;
    getAllServices(): Promise<Array<Service>>;
    getBlogPost(id: bigint): Promise<BlogPost>;
    getBooking(id: bigint): Promise<Booking>;
    getProduct(id: bigint): Promise<Product>;
    getReview(id: bigint): Promise<Review>;
    getService(id: bigint): Promise<Service>;
    getStoreStats(): Promise<StoreStats>;
    seedData(): Promise<void>;
    updateBlogPost(id: bigint, blogPost: BlogPost): Promise<void>;
    updateProduct(id: bigint, product: Product): Promise<void>;
    updateReview(id: bigint, review: Review): Promise<void>;
    updateService(id: bigint, service: Service): Promise<void>;
    updateStoreStats(stats: StoreStats): Promise<void>;
}
