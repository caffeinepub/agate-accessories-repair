import Map "mo:core/Map";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Int "mo:core/Int";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Principal "mo:core/Principal";

actor {
  type BlogPost = {
    title : Text;
    content : Text;
    author : Text;
    date : Time.Time;
    category : Text;
    readTime : Nat;
    imageUrl : Text;
  };

  type Review = {
    customerName : Text;
    rating : Nat;
    reviewText : Text;
    phoneModel : Text;
    date : Time.Time;
  };

  type Service = {
    name : Text;
    description : Text;
    priceRange : Text;
    doorstepAvailable : Bool;
    durationEstimate : Text;
  };

  type Product = {
    name : Text;
    category : Text;
    description : Text;
    price : Nat;
    brandCompatibility : Text;
  };

  type Booking = {
    name : Text;
    phone : Text;
    serviceType : Text;
    address : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type StoreStats = {
    yearsInBusiness : Nat;
    happyCustomers : Nat;
    repairsDone : Nat;
  };

  module BlogPost {
    public func compare(p1 : BlogPost, p2 : BlogPost) : Order.Order {
      Text.compare(p1.title, p2.title);
    };
  };

  module Review {
    public func compare(r1 : Review, r2 : Review) : Order.Order {
      Text.compare(r1.customerName, r2.customerName);
    };
  };

  let blogPosts = Map.empty<Nat, BlogPost>();
  let reviews = Map.empty<Nat, Review>();
  let services = Map.empty<Nat, Service>();
  let products = Map.empty<Nat, Product>();
  let bookings = Map.empty<Nat, Booking>();

  var nextId = 1;
  var storeStats : StoreStats = {
    yearsInBusiness = 5;
    happyCustomers = 1000;
    repairsDone = 2000;
  };

  func getNextId() : Nat {
    let id = nextId;
    nextId += 1;
    id;
  };

  // Blog Posts CRUD
  public shared ({ caller }) func createBlogPost(blogPost : BlogPost) : async Nat {
    let id = getNextId();
    blogPosts.add(id, blogPost);
    id;
  };

  public query ({ caller }) func getBlogPost(id : Nat) : async BlogPost {
    switch (blogPosts.get(id)) {
      case (null) { Runtime.trap("Blog post does not exist") };
      case (?blogPost) { blogPost };
    };
  };

  public shared ({ caller }) func updateBlogPost(id : Nat, blogPost : BlogPost) : async () {
    if (not blogPosts.containsKey(id)) {
      Runtime.trap("Blog post does not exist");
    };
    blogPosts.add(id, blogPost);
  };

  public shared ({ caller }) func deleteBlogPost(id : Nat) : async () {
    if (not blogPosts.containsKey(id)) {
      Runtime.trap("Blog post does not exist");
    };
    blogPosts.remove(id);
  };

  public query ({ caller }) func getAllBlogPosts() : async [BlogPost] {
    blogPosts.values().toArray().sort();
  };

  // Reviews CRUD
  public shared ({ caller }) func createReview(review : Review) : async Nat {
    let id = getNextId();
    reviews.add(id, review);
    id;
  };

  public query ({ caller }) func getReview(id : Nat) : async Review {
    switch (reviews.get(id)) {
      case (null) { Runtime.trap("Review does not exist") };
      case (?review) { review };
    };
  };

  public shared ({ caller }) func updateReview(id : Nat, review : Review) : async () {
    if (not reviews.containsKey(id)) {
      Runtime.trap("Review does not exist");
    };
    reviews.add(id, review);
  };

  public shared ({ caller }) func deleteReview(id : Nat) : async () {
    if (not reviews.containsKey(id)) {
      Runtime.trap("Review does not exist");
    };
    reviews.remove(id);
  };

  public query ({ caller }) func getAllReviews() : async [Review] {
    reviews.values().toArray().sort();
  };

  // Services CRUD
  public shared ({ caller }) func createService(service : Service) : async Nat {
    let id = getNextId();
    services.add(id, service);
    id;
  };

  public query ({ caller }) func getService(id : Nat) : async Service {
    switch (services.get(id)) {
      case (null) { Runtime.trap("Service does not exist") };
      case (?service) { service };
    };
  };

  public shared ({ caller }) func updateService(id : Nat, service : Service) : async () {
    if (not services.containsKey(id)) {
      Runtime.trap("Service does not exist");
    };
    services.add(id, service);
  };

  public shared ({ caller }) func deleteService(id : Nat) : async () {
    if (not services.containsKey(id)) {
      Runtime.trap("Service does not exist");
    };
    services.remove(id);
  };

  public query ({ caller }) func getAllServices() : async [Service] {
    services.values().toArray();
  };

  // Products CRUD
  public shared ({ caller }) func createProduct(product : Product) : async Nat {
    let id = getNextId();
    products.add(id, product);
    id;
  };

  public query ({ caller }) func getProduct(id : Nat) : async Product {
    switch (products.get(id)) {
      case (null) { Runtime.trap("Product does not exist") };
      case (?product) { product };
    };
  };

  public shared ({ caller }) func updateProduct(id : Nat, product : Product) : async () {
    if (not products.containsKey(id)) {
      Runtime.trap("Product does not exist");
    };
    products.add(id, product);
  };

  public shared ({ caller }) func deleteProduct(id : Nat) : async () {
    if (not products.containsKey(id)) {
      Runtime.trap("Product does not exist");
    };
    products.remove(id);
  };

  public query ({ caller }) func getAllProducts() : async [Product] {
    products.values().toArray();
  };

  // Booking Requests CRUD
  public shared ({ caller }) func createBooking(booking : Booking) : async Nat {
    let id = getNextId();
    bookings.add(id, booking);
    id;
  };

  public query ({ caller }) func getBooking(id : Nat) : async Booking {
    switch (bookings.get(id)) {
      case (null) { Runtime.trap("Booking does not exist") };
      case (?booking) { booking };
    };
  };

  public shared ({ caller }) func deleteBooking(id : Nat) : async () {
    if (not bookings.containsKey(id)) {
      Runtime.trap("Booking does not exist");
    };
    bookings.remove(id);
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray();
  };

  // Store Stats
  public query ({ caller }) func getStoreStats() : async StoreStats {
    storeStats;
  };

  public shared ({ caller }) func updateStoreStats(stats : StoreStats) : async () {
    storeStats := stats;
  };

  // Seed Data (initialize with sample data)
  public shared ({ caller }) func seedData() : async () {
    if (blogPosts.size() > 0) {
      Runtime.trap("Data already seeded");
    };

    let sampleBlogPosts : [(Nat, BlogPost)] = [
      (
        getNextId(),
        {
          title = "Top 5 Phone Accessories for 2023";
          content = "Discover the best phone accessories to enhance your mobile experience...";
          author = "John Doe";
          date = Time.now();
          category = "Accessories";
          readTime = 4;
          imageUrl = "https://example.com/image1.jpg";
        },
      ),
      (
        getNextId(),
        {
          title = "Why Doorstep Phone Repair is the Future";
          content = "Convenience is key - learn why doorstep repair is on the rise...";
          author = "Jane Smith";
          date = Time.now();
          category = "Services";
          readTime = 5;
          imageUrl = "https://example.com/image2.jpg";
        },
      ),
      (
        getNextId(),
        {
          title = "How to Protect Your Phone Screen";
          content = "Tips and tricks to keep your phone screen safe...";
          author = "Mike Lee";
          date = Time.now();
          category = "Tips";
          readTime = 3;
          imageUrl = "https://example.com/image3.jpg";
        },
      ),
      (
        getNextId(),
        {
          title = "Best Budget Phone Cases";
          content = "Affordable yet durable phone cases reviewed...";
          author = "Emily Davis";
          date = Time.now();
          category = "Reviews";
          readTime = 4;
          imageUrl = "https://example.com/image4.jpg";
        },
      ),
      (
        getNextId(),
        {
          title = "Agate's Warranty Policy Explained";
          content = "Everything you need to know about our warranty...";
          author = "Sarah Lee";
          date = Time.now();
          category = "Info";
          readTime = 2;
          imageUrl = "https://example.com/image5.jpg";
        },
      ),
    ];

    let sampleReviews : [(Nat, Review)] = [
      (
        getNextId(),
        {
          customerName = "Rahul Sharma";
          rating = 5;
          reviewText = "Excellent service! Doorstep repair was so convenient.";
          phoneModel = "Samsung Galaxy S21";
          date = Time.now();
        },
      ),
      (
        getNextId(),
        {
          customerName = "Neha Patel";
          rating = 4;
          reviewText = "Quick and reliable. Would recommend to others.";
          phoneModel = "iPhone 12";
          date = Time.now();
        },
      ),
      (
        getNextId(),
        {
          customerName = "Amit Kumar";
          rating = 5;
          reviewText = "Very professional team. Accessories quality is top notch.";
          phoneModel = "OnePlus 9";
          date = Time.now();
        },
      ),
      (
        getNextId(),
        {
          customerName = "Priya Singh";
          rating = 4;
          reviewText = "Happy with the service. Prices are reasonable.";
          phoneModel = "Samsung Galaxy Note 10";
          date = Time.now();
        },
      ),
      (
        getNextId(),
        {
          customerName = "Vikram Rao";
          rating = 5;
          reviewText = "Fast turnaround time. Doorstep service is a game changer.";
          phoneModel = "iPhone 11";
          date = Time.now();
        },
      ),
    ];

    let sampleServices : [(Nat, Service)] = [
      (
        getNextId(),
        {
          name = "Screen Replacement";
          description = "High quality screen replacement for all major brands.";
          priceRange = "2000-5000 INR";
          doorstepAvailable = true;
          durationEstimate = "1-2 hours";
        },
      ),
      (
        getNextId(),
        {
          name = "Battery Replacement";
          description = "Replace old or faulty batteries with genuine parts.";
          priceRange = "1500-3000 INR";
          doorstepAvailable = true;
          durationEstimate = "1 hour";
        },
      ),
      (
        getNextId(),
        {
          name = "Charging Port Repair";
          description = "Fix damaged or non-working charging ports.";
          priceRange = "1000-2500 INR";
          doorstepAvailable = true;
          durationEstimate = "1-2 hours";
        },
      ),
      (
        getNextId(),
        {
          name = "Water Damage Repair";
          description = "Comprehensive water damage repair services.";
          priceRange = "Varies";
          doorstepAvailable = false;
          durationEstimate = "3-5 hours";
        },
      ),
      (
        getNextId(),
        {
          name = "Software Troubleshooting";
          description = "Resolve software issues and optimize performance.";
          priceRange = "500-1500 INR";
          doorstepAvailable = true;
          durationEstimate = "30 minutes";
        },
      ),
    ];

    let sampleProducts : [(Nat, Product)] = [
      (
        getNextId(),
        {
          name = "Premium Tempered Glass";
          category = "Screen Protector";
          description = "High quality tempered glass for added protection.";
          price = 399;
          brandCompatibility = "All major brands";
        },
      ),
      (
        getNextId(),
        {
          name = "Fast Charging Cable";
          category = "Charging Accessories";
          description = "Durable and fast charging USB cables.";
          price = 299;
          brandCompatibility = "Android, iPhone";
        },
      ),
      (
        getNextId(),
        {
          name = "Wireless Earbuds";
          category = "Audio Accessories";
          description = "Sleek and affordable wireless earbuds.";
          price = 1499;
          brandCompatibility = "All devices";
        },
      ),
      (
        getNextId(),
        {
          name = "Protective Phone Case";
          category = "Phone Case";
          description = "Shockproof and stylish phone cases.";
          price = 499;
          brandCompatibility = "iPhone, Samsung, OnePlus";
        },
      ),
      (
        getNextId(),
        {
          name = "Car Phone Holder";
          category = "Car Accessories";
          description = "Secure and adjustable car phone holders.";
          price = 799;
          brandCompatibility = "All phones";
        },
      ),
    ];

    // Correct persistent Map updates
    for ((id, blogPost) in sampleBlogPosts.values()) {
      blogPosts.add(id, blogPost);
    };

    for ((id, review) in sampleReviews.values()) {
      reviews.add(id, review);
    };

    for ((id, service) in sampleServices.values()) {
      services.add(id, service);
    };

    for ((id, product) in sampleProducts.values()) {
      products.add(id, product);
    };
  };
};
