export interface Product {
  id: string;
  name: string;
  cateory: string[];
  price: string;
  size: string[];
  color: string[];
  liked: number;
  brand: string;
  thumbnail: string;
  photos: string[];
  updated_at: string;
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  nick_name: string;
  photo_url: string;
  created_at: string;
  is_certified: boolean;
  social_accounts: SocialAccount[];
}

export interface SocialAccount {
  id: string;
  provider: string;
  social_id: string;
  created_at: string;
  user: User;
}

export interface ApiResponse {
  code: string;
  message: string;
}

export interface JWT {
  user: User;
  iat: number;
  exp: number;
}

export interface Cart {
  product: Product;
  count: number;
}

export interface Event {
  id: string;
  index: number;
  title: string;
  author: string;
  content: string;
  is_deleted: boolean;
  updated_at: string;
  created_at: string;
  replies: EventReply[];
}
export interface EventPageMeta {
  readonly page: number;
  readonly take: number;
  readonly itemCount: number;
  readonly pageCount: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;
}
export interface EventPage {
  data: Event[] | null;
  meta: EventPageMeta | null;
}

export interface EventReply {
  id: string;
  author: string;
  reply: string;
  is_deleted: boolean;
  updated_at: string;
  created_at: string;
  event: Event;
}

export interface Notice {
  id: string;
  index: number;
  title: string;
  author: string;
  content: string;
  is_deleted: boolean;
  updated_at: string;
  created_at: string;
}
export interface NoticePageMeta {
  readonly page: number;
  readonly take: number;
  readonly itemCount: number;
  readonly pageCount: number;
  readonly hasPreviousPage: boolean;
  readonly hasNextPage: boolean;
}
export interface NoticePage {
  data: Notice[] | null;
  meta: NoticePageMeta | null;
}

export interface ProductReview {
  id: string;
  index: number;
  author: string;
  review: string;
  is_deleted: boolean;
  updated_at: string;
  created_at: string;
  product: Product;

  title: string;
}
