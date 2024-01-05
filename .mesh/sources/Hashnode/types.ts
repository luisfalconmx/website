// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace HashnodeTypes {
  export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  hn_ObjectId: { input: any; output: any; }
};

/** Enum of all the scopes that can be used with the @requireAuth directive. */
export type hn_Scope =
  | 'write_post'
  | 'write_series'
  | 'create_pro'
  | 'assign_pro_publications'
  | 'active_pro_user'
  | 'change_pro_subscription'
  | 'signup'
  | 'import_subscribers_to_publication'
  | 'acknowledge_email_import'
  | 'recommend_publications'
  | 'publication_admin'
  | 'webhook_admin'
  | 'update_post'
  | 'publish_draft'
  | 'publish_post'
  | 'publish_comment'
  | 'update_comment'
  | 'remove_comment'
  | 'publish_reply'
  | 'update_reply'
  | 'remove_reply';

/** SortOrder is a common enum for all types that can be sorted. */
export type hn_SortOrder =
  | 'asc'
  | 'dsc';

/** Node is a common interface for all types example User, Post, Comment, etc. */
export type hn_Node = {
  /** The ID of the node. */
  id: Scalars['ID']['output'];
};

/**
 * Connection to get list of items.
 * Returns a list of edges which contains the items and cursor to the last item of the previous page.
 * This is a common interface for all connections.
 */
export type hn_Connection = {
  /** A list of edges of items connection. */
  edges: Array<hn_Edge>;
  /** Information to aid in pagination. */
  pageInfo: hn_PageInfo;
};

/**
 * An edge that contains a node and cursor to the node.
 * This is a common interface for all edges.
 */
export type hn_Edge = {
  /** A node in the connection. */
  node: hn_Node;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/**
 * A Connection for page based pagination to get a list of items.
 * Returns a list of nodes which contains the items.
 * This is a common interface for all page connections.
 */
export type hn_PageConnection = {
  /** A list of edges of items connection. */
  nodes: Array<hn_Node>;
  /** Information to aid in pagination. */
  pageInfo: hn_OffsetPageInfo;
};

/** Common fields that describe a feature. */
export type hn_Feature = {
  /** Whether the feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

/** Contains information to help in pagination. */
export type hn_PageInfo = {
  /** Indicates if there are more pages. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The cursor of the last item in the current page.
   * Use it as the after input to query the next page.
   */
  endCursor?: Maybe<Scalars['String']['output']>;
};

/** Contains information to help in pagination for page based pagination. */
export type hn_OffsetPageInfo = {
  /** Indicates if there are more pages. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** Indicates if there are previous pages */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
  /**
   * The page before the current page.
   * Use it to build page navigation
   */
  previousPage?: Maybe<Scalars['Int']['output']>;
  /**
   * The page after the current page.
   * Use it to build page navigation
   */
  nextPage?: Maybe<Scalars['Int']['output']>;
};

export type hn_Content = {
  /** The Markdown version of the content. */
  markdown: Scalars['String']['output'];
  /** The HTML version of the content. */
  html: Scalars['String']['output'];
  /** The text version from sanitized html content. HTML tags are stripped and only text is returned. */
  text: Scalars['String']['output'];
};

/** Information to help in seo related meta tags. */
export type hn_SEO = {
  /** The title used in og:title tag for SEO purposes. */
  title?: Maybe<Scalars['String']['output']>;
  /** The description used in og:description tag for SEO purposes. */
  description?: Maybe<Scalars['String']['output']>;
};

/** Information to help in open graph related meta tags. */
export type hn_OpenGraphMetaData = {
  /** The image used in og:image tag for SEO purposes. */
  image?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  Hashnode: HashnodeQuery;
};

export type Mutation = {
  Hashnode: HashnodeMutation;
};

/**
 * Connection for users to another user. Contains a list of nodes.
 * Each node is a user.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_UserConnection = hn_PageConnection & {
  /** A list of users */
  nodes: Array<hn_User>;
  /** Information for page based pagination in users connection. */
  pageInfo: hn_OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** Basic information about a user on Hashnode. */
export type hn_IUser = {
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID']['output'];
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String']['output'];
  /** The name of the user. */
  name: Scalars['String']['output'];
  /** The bio of the user. Visible in about me section of the user's profile. */
  bio?: Maybe<hn_Content>;
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']['output']>;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<hn_SocialMediaLinks>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<hn_Badge>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: hn_UserPublicationsConnection;
  /** Returns the list of posts the user has published. */
  posts: hn_UserPostConnection;
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int']['output'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int']['output'];
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  /** The location of the user. */
  location?: Maybe<Scalars['String']['output']>;
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']['output']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<hn_Tag>;
  /** Whether or not the user is an ambassador. */
  ambassador: Scalars['Boolean']['output'];
  /** Whether or not the user is deactivated. */
  deactivated: Scalars['Boolean']['output'];
  /** The users who are following this user */
  followers: hn_UserConnection;
  /** The users which this user is following */
  follows: hn_UserConnection;
};


/** Basic information about a user on Hashnode. */
export type hn_IUserpublicationsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_UserPublicationsConnectionFilter>;
};


/** Basic information about a user on Hashnode. */
export type hn_IUserpostsArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  sortBy?: InputMaybe<hn_UserPostsSort>;
  filter?: InputMaybe<hn_UserPostConnectionFilter>;
};


/** Basic information about a user on Hashnode. */
export type hn_IUserfollowersArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


/** Basic information about a user on Hashnode. */
export type hn_IUserfollowsArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

/** Basic information about a user on Hashnode. */
export type hn_User = hn_IUser & hn_Node & {
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID']['output'];
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String']['output'];
  /** The name of the user. */
  name: Scalars['String']['output'];
  /** The bio of the user. Visible in about me section of the user's profile. */
  bio?: Maybe<hn_Content>;
  /**
   * The bio of the user. Visible in about me section of the user's profile.
   * @deprecated Will be removed on 26/10/2023. Use bio instead of bioV2
   */
  bioV2?: Maybe<hn_Content>;
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']['output']>;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<hn_SocialMediaLinks>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<hn_Badge>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: hn_UserPublicationsConnection;
  /** Returns the list of posts the user has published. */
  posts: hn_UserPostConnection;
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int']['output'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int']['output'];
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  /** The location of the user. */
  location?: Maybe<Scalars['String']['output']>;
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']['output']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<hn_Tag>;
  /**
   * Whether or not the user is an ambassador.
   * @deprecated Ambassadors program no longer active. Will be removed after 02/01/2024
   */
  ambassador: Scalars['Boolean']['output'];
  /** Whether or not the user is deactivated. */
  deactivated: Scalars['Boolean']['output'];
  /**
   * Wether or not the authenticated user follows this user.
   * Returns false if the authenticated user this user.
   */
  following: Scalars['Boolean']['output'];
  /**
   * Wether or not this user follows the authenticated user.
   * Returns false if the authenticated user this user.
   */
  followsBack: Scalars['Boolean']['output'];
  /** Wether or not this is a pro user. */
  isPro: Scalars['Boolean']['output'];
  /** The users who are following this user */
  followers: hn_UserConnection;
  /** The users which this user is following */
  follows: hn_UserConnection;
};


/** Basic information about a user on Hashnode. */
export type hn_UserpublicationsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_UserPublicationsConnectionFilter>;
};


/** Basic information about a user on Hashnode. */
export type hn_UserpostsArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  sortBy?: InputMaybe<hn_UserPostsSort>;
  filter?: InputMaybe<hn_UserPostConnectionFilter>;
};


/** Basic information about a user on Hashnode. */
export type hn_UserfollowersArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


/** Basic information about a user on Hashnode. */
export type hn_UserfollowsArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type hn_MyUser = hn_IUser & hn_Node & {
  /** The ID of the user. It can be used to identify the user. */
  id: Scalars['ID']['output'];
  /** The username of the user. It is unique and tied with user's profile URL. Example - https://hashnode.com/@username */
  username: Scalars['String']['output'];
  /** The name of the user. */
  name: Scalars['String']['output'];
  /** The bio of the user. Visible in about me section of the user's profile. */
  bio?: Maybe<hn_Content>;
  /** The URL to the profile picture of the user. */
  profilePicture?: Maybe<Scalars['String']['output']>;
  /** The social media links of the user. Shown on the user's profile. */
  socialMediaLinks?: Maybe<hn_SocialMediaLinks>;
  /** Returns a list of badges that the user has earned. Shown on blogs /badges page. Example - https://iamshadmirza.com/badges */
  badges: Array<hn_Badge>;
  /** Publications associated with the user. Includes personal and team publications. */
  publications: hn_UserPublicationsConnection;
  /** Returns the list of posts the user has published. */
  posts: hn_UserPostConnection;
  /** The number of users that follow the requested user. Visible in the user's profile. */
  followersCount: Scalars['Int']['output'];
  /** The number of users that this user is following. Visible in the user's profile. */
  followingsCount: Scalars['Int']['output'];
  /** The tagline of the user. Shown on the user's profile below the name. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** The date the user joined Hashnode. */
  dateJoined?: Maybe<Scalars['DateTime']['output']>;
  /** The location of the user. */
  location?: Maybe<Scalars['String']['output']>;
  /** The availability of the user based on tech stack and interests. Shown on the "I am available for" section in user's profile. */
  availableFor?: Maybe<Scalars['String']['output']>;
  /** Returns a list of tags that the user follows. */
  tagsFollowing: Array<hn_Tag>;
  /**
   * Whether or not the user is an ambassador.
   * @deprecated Ambassadors program no longer active. Will be removed after 02/01/2024
   */
  ambassador: Scalars['Boolean']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  /** Whether or not the user is deactivated. */
  deactivated: Scalars['Boolean']['output'];
  /** A list of beta features that the user has access to. Only available to the authenticated user. */
  betaFeatures: Array<hn_BetaFeature>;
  /** Hashnode users are subscribed to a newsletter by default. This field can be used to unsubscribe from the newsletter. Only available to the authenticated user. */
  unsubscribeCode?: Maybe<Scalars['String']['output']>;
  /** Email address of the user. Only available to the authenticated user. */
  email?: Maybe<Scalars['String']['output']>;
  /** The users who are following this user */
  followers: hn_UserConnection;
  /** The users which this user is following */
  follows: hn_UserConnection;
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type hn_MyUserpublicationsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_UserPublicationsConnectionFilter>;
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type hn_MyUserpostsArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
  sortBy?: InputMaybe<hn_UserPostsSort>;
  filter?: InputMaybe<hn_UserPostConnectionFilter>;
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type hn_MyUserfollowersArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};


/**
 * Basic information about the authenticated user.
 * User must be authenticated to use this type.
 */
export type hn_MyUserfollowsArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

/**
 * Connection to get list of publications.
 * Returns a list of edges which contains the publications and cursor to the last item of the previous page.
 */
export type hn_UserPublicationsConnection = hn_Connection & {
  /** A list of edges of publications connection. */
  edges: Array<hn_UserPublicationsEdge>;
  /** Information to aid in pagination. */
  pageInfo: hn_PageInfo;
  /** The total amount of publications taking into account the filter. */
  totalDocuments: Scalars['Int']['output'];
};

/** An edge that contains a node of type publication and cursor to the node. */
export type hn_UserPublicationsEdge = hn_Edge & {
  /** Node containing the publication. */
  node: hn_Publication;
  /** The cursor to the node. */
  cursor: Scalars['String']['output'];
  /** The role of the user in the publication. */
  role: hn_UserPublicationRole;
};

/** The role of the user in the publication. */
export type hn_UserPublicationRole =
  /** The owner is the creator of the publication and can do all things, including delete publication. */
  | 'OWNER'
  /**
   * The editor has access to the publication dashboard to customize the blog and approve/reject posts.
   * They also have access to the member panel to add/modify/remove members. Editors cannot remove other editors or update their roles.
   */
  | 'EDITOR'
  /** Contributors can join the publication and contribute an article. They cannot directly publish a new article. */
  | 'CONTRIBUTOR';

/** Available social media links. */
export type hn_SocialMediaLinks = {
  /** The user's website. */
  website?: Maybe<Scalars['String']['output']>;
  /** The user's GitHub profile. */
  github?: Maybe<Scalars['String']['output']>;
  /** The user's Twitter profile. */
  twitter?: Maybe<Scalars['String']['output']>;
  /** The user's Instagram profile. */
  instagram?: Maybe<Scalars['String']['output']>;
  /** The user's Facebook profile. */
  facebook?: Maybe<Scalars['String']['output']>;
  /** The user's StackOverflow profile. */
  stackoverflow?: Maybe<Scalars['String']['output']>;
  /** The user's LinkedIn profile. */
  linkedin?: Maybe<Scalars['String']['output']>;
  /** The user's YouTube profile. */
  youtube?: Maybe<Scalars['String']['output']>;
};

/** A badge that the user has earned. */
export type hn_Badge = hn_Node & {
  /** The ID of the badge. */
  id: Scalars['ID']['output'];
  /** The name of the badge. */
  name: Scalars['String']['output'];
  /** The description of the badge. */
  description?: Maybe<Scalars['String']['output']>;
  /** The image of the badge. */
  image: Scalars['String']['output'];
  /** The date the badge was earned. */
  dateAssigned?: Maybe<Scalars['DateTime']['output']>;
  /** Link to badge page on Hashnode. */
  infoURL?: Maybe<Scalars['String']['output']>;
  /** A flag to determine if the badge is hidden. */
  suppressed?: Maybe<Scalars['Boolean']['output']>;
};

/** Filter to apply to the publications. */
export type hn_UserPublicationsConnectionFilter = {
  /** Only include publication in which the user has one of the provided roles. */
  roles?: InputMaybe<Array<hn_UserPublicationRole>>;
  /** Only return pro publications. */
  isPro?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Payload for the toggleFollowingUser mutation. */
export type hn_ToggleFollowUserPayload = {
  /** The user that was followed/unfollowed. */
  user?: Maybe<hn_User>;
};

/**
 * Connection to get list of top commenters. Contains a list of edges containing nodes.
 * Each node is a user who commented recently.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_CommenterUserConnection = hn_Connection & {
  /** A list of edges of commenters. */
  edges: Array<hn_UserEdge>;
  /** Information to aid in pagination. */
  pageInfo: hn_PageInfo;
};

/** Contains a node of type user and cursor for pagination. */
export type hn_UserEdge = hn_Edge & {
  /** The node containing User information */
  node: hn_User;
  /** The cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/** Filter for the posts of a user. */
export type hn_UserPostsAuthorTypeFilter =
  /** Only posts that are authored by the user. */
  | 'AUTHOR_ONLY'
  /** Only posts that are co-authored by the user. */
  | 'CO_AUTHOR_ONLY';

/** Sorting for the posts of a user. */
export type hn_UserPostsSort =
  /** Newest posts first. */
  | 'DATE_PUBLISHED_DESC'
  /** Oldest posts first. */
  | 'DATE_PUBLISHED_ASC';

/** Filter for the posts of a user. */
export type hn_UserPostConnectionFilter = {
  /**
   * Only include posts that reference the provided tag IDs.
   *
   *
   * Filtering by `tags` and `tagSlugs` will filter posts that match either of those two filters.
   */
  tags?: InputMaybe<Array<Scalars['ID']['input']>>;
  /**
   * Only include posts that reference the provided tag slugs.
   *
   * Filtering by `tags` and `tagSlugs` will filter posts that match either of those two filters.
   */
  tagSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filtering by publication IDs will return posts from the author within the publication. */
  publications?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Filtering by author status. Either all posts the user has authored or co-authored are returned or the authored posts only. */
  authorType?: InputMaybe<hn_UserPostsAuthorTypeFilter>;
};

/**
 * Contains basic information about the tag.
 * A tag is a label that categorizes posts with similar topics.
 */
export type hn_ITag = {
  /** The ID of the tag. */
  id: Scalars['ID']['output'];
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String']['output'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String']['output'];
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<hn_Content>;
  /** Total number of users following this tag. */
  followersCount: Scalars['Int']['output'];
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int']['output'];
};

export type hn_Tag = hn_ITag & hn_Node & {
  /** The ID of the tag. */
  id: Scalars['ID']['output'];
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String']['output'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String']['output'];
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<hn_Content>;
  /** Total number of users following this tag. */
  followersCount: Scalars['Int']['output'];
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int']['output'];
  /** Paginated list of posts published under this tag */
  posts: hn_FeedPostConnection;
};


export type hn_TagpostsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter: hn_TagPostConnectionFilter;
};

/** Contains basic information about the tag returned by popularTags query. */
export type hn_PopularTag = hn_ITag & hn_Node & {
  /** The ID of the tag. */
  id: Scalars['ID']['output'];
  /** The name of the tag. Shown in tag page. */
  name: Scalars['String']['output'];
  /** The slug of the tag. Used to access tags feed.  Example https://hashnode.com/n/graphql */
  slug: Scalars['String']['output'];
  /** The logo of the tag. Shown in tag page. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The tagline of the tag. */
  tagline?: Maybe<Scalars['String']['output']>;
  /** Information about the tag. Contains markdown html and text version of the tag's info. */
  info?: Maybe<hn_Content>;
  /** Total number of users following this tag. */
  followersCount: Scalars['Int']['output'];
  /** Alltime usage count of this tag in posts. */
  postsCount: Scalars['Int']['output'];
  /** The number of posts published in the given period that use this tag. */
  postsCountInPeriod: Scalars['Int']['output'];
};

/** The field by which to sort the tag feed. */
export type hn_TagPostsSort =
  /** Determinate how to sort the results. Defaults to recents, used in New tag feed. */
  | 'recent'
  /** Sorts by popularity, used in Hot tag feed. */
  | 'popular'
  /** Trending is particular used to fetch top posts trending within a week time under a tag */
  | 'trending';

export type hn_TagPostConnectionFilter = {
  /** Sort tag feed by recents, popular, or trending. Defaults to recents. */
  sortBy?: InputMaybe<hn_TagPostsSort>;
};

/** Contains a tag and a cursor for pagination. */
export type hn_PopularTagEdge = hn_Edge & {
  /** The node holding the Tag information */
  node: hn_PopularTag;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/** Contains a tag and a cursor for pagination. */
export type hn_TagEdge = hn_Edge & {
  /** The node holding the Tag information */
  node: hn_Tag;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_Publication = hn_Node & {
  /** The ID of the publication. */
  id: Scalars['ID']['output'];
  /**
   * The title of the publication.
   * Title is used as logo if logo is not provided.
   */
  title: Scalars['String']['output'];
  /** The title of the publication. Shown in blog home page. */
  displayTitle?: Maybe<Scalars['String']['output']>;
  /** The description of the publication, used in og:description meta tag. Fall backs to Publication.about.text if no SEO description is provided. */
  descriptionSEO?: Maybe<Scalars['String']['output']>;
  /** The about section of the publication. */
  about?: Maybe<hn_Content>;
  /** The domain of the publication. Used to access publication. Example https://johndoe.com */
  url: Scalars['String']['output'];
  /** The canonical URL of the publication. */
  canonicalURL: Scalars['String']['output'];
  /** The author who owns the publication. */
  author: hn_User;
  /** The favicon of the publication. Used in browser tab. */
  favicon?: Maybe<Scalars['String']['output']>;
  /** Color code of the header color of the publication. Used to style header of blog. */
  headerColor?: Maybe<Scalars['String']['output']>;
  /** The meta tags associated with the publication. */
  metaTags?: Maybe<Scalars['String']['output']>;
  /** The integrations connected to the publication. */
  integrations?: Maybe<hn_PublicationIntegrations>;
  /** The publication preferences around layout, theme and other personalisations. */
  preferences: hn_Preferences;
  /** Total number of followers of the publication. */
  followersCount?: Maybe<Scalars['Int']['output']>;
  /**
   * Summary of the contact information and information related to copyrights, usually used in German-speaking countries.
   * @deprecated Use `imprintV2` instead. Will be removed after 16/12/2023.
   */
  imprint?: Maybe<Scalars['String']['output']>;
  /** Summary of the contact information and information related to copyrights, usually used in German-speaking countries. */
  imprintV2?: Maybe<hn_Content>;
  /** True if the publication is a team publication and false otherwise. */
  isTeam: Scalars['Boolean']['output'];
  /** Links to the publication's social media profiles. */
  links?: Maybe<hn_PublicationLinks>;
  /** Domain information of the publication. */
  domainInfo: hn_DomainInfo;
  /** A flag to indicate if the publication is using Headless CMS. This can be used to check if the post redirect needs authentication. */
  isHeadless: Scalars['Boolean']['output'];
  /** Returns series by slug in the publication. */
  series?: Maybe<hn_Series>;
  /** Returns the list of series in the publication. */
  seriesList: hn_SeriesConnection;
  /** Returns the list of posts in the publication. */
  posts: hn_PublicationPostConnection;
  /** Returns the pinned post of the publication. */
  pinnedPost?: Maybe<hn_Post>;
  /** Returns the post with the given slug. */
  post?: Maybe<hn_Post>;
  /** Information about the publication's Open Graph metadata i.e. image. */
  ogMetaData: hn_OpenGraphMetaData;
  /** Object containing information about beta features enabled for the publication. */
  features: hn_PublicationFeatures;
  /** Returns the list of drafts in the publication. */
  drafts: hn_DraftConnection;
  /** Returns the scheduled drafts of the publication. */
  scheduledDrafts: hn_DraftConnection;
  /** Returns the static page with the given slug. */
  staticPage?: Maybe<hn_StaticPage>;
  /** Returns a list of static pages in the publication. */
  staticPages: hn_StaticPageConnection;
  /** Returns the list of submitted drafts in the publication. */
  submittedDrafts: hn_DraftConnection;
  /** Returns true if GitHub backup is configured and active and false otherwise. */
  isGitHubBackupEnabled: Scalars['Boolean']['output'];
  /** Determines the structure of the post URLs. */
  urlPattern: hn_UrlPattern;
  /** Returns the publication's email imports, used with newsletter feature. */
  emailImport?: Maybe<hn_EmailImport>;
  /** Configured redirection rules for the publication. */
  redirectionRules: Array<hn_RedirectionRule>;
  /** Whether the publication has earned any badges or not. */
  hasBadges: Scalars['Boolean']['output'];
  /** Contains the publication's sponsorships information. */
  sponsorship?: Maybe<hn_PublicationSponsorship>;
  /** Publications that are recommended by this publication. */
  recommendedPublications: Array<hn_UserRecommendedPublicationEdge>;
  /** The total amount of recommended publications by this publication. */
  totalRecommendedPublications: Scalars['Int']['output'];
  /** Publications that are recommending this publication. */
  recommendingPublications: hn_PublicationUserRecommendingPublicationConnection;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationseriesArgs = {
  slug: Scalars['String']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationseriesListArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationpostsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_PublicationPostConnectionFilter>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationpostArgs = {
  slug: Scalars['String']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationdraftsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_PublicationDraftConnectionFilter>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationscheduledDraftsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_PublicationDraftConnectionFilter>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationstaticPageArgs = {
  slug: Scalars['String']['input'];
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationstaticPagesArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationsubmittedDraftsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_PublicationDraftConnectionFilter>;
};


/**
 * Contains basic information about the publication.
 * A publication is a blog that can be created for a user or a team.
 */
export type hn_PublicationrecommendingPublicationsArgs = {
  pageSize: Scalars['Int']['input'];
  page: Scalars['Int']['input'];
};

export type hn_UserRecommendedPublicationEdge = {
  /** The publication that is recommended by the publication this connection originates from. */
  node: hn_Publication;
  /** The amount of followers the publication referenced in `node` has gained by recommendations from the publication. */
  totalFollowersGained: Scalars['Int']['output'];
};

export type hn_PublicationUserRecommendingPublicationConnection = hn_PageConnection & {
  /** A list of edges containing Post information */
  edges: Array<hn_UserRecommendingPublicationEdge>;
  /** Publications recommending this publication. */
  nodes: Array<hn_Publication>;
  /** Information for page based pagination in Post connection. */
  pageInfo: hn_OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

export type hn_UserRecommendingPublicationEdge = {
  /** The publication that is recommending the publication this connection originates from. */
  node: hn_Publication;
  /** The amount of followers the publication has gained by recommendations from the publication referenced in `node`. */
  totalFollowersGained: Scalars['Int']['output'];
};

export type hn_RSSImport = hn_Node & {
  id: Scalars['ID']['output'];
  /** The URL pointing to the RSS feed. */
  rssURL: Scalars['String']['output'];
};

/**
 * Contains the publication's Sponsorship information.
 * User can sponsor their favorite publications and pay them directly using Stripe.
 */
export type hn_PublicationSponsorship = {
  /**
   * The content shared by author of the publication to their sponsors.
   * This is used as note to inform that author is open for sponsorship.
   */
  content?: Maybe<hn_Content>;
  /** The Stripe configuration of the publication's Sponsorship. */
  stripe?: Maybe<hn_StripeConfiguration>;
};

/** Contains the publication's Stripe configuration. */
export type hn_StripeConfiguration = {
  /** A flag indicating if the publication is connected to Stripe. */
  connected: Scalars['Boolean']['output'];
  /** The Stripe account ID of the publication. */
  accountId?: Maybe<Scalars['String']['output']>;
  /** The country of origin of the publication. */
  country?: Maybe<Scalars['String']['output']>;
};

export type hn_RedirectionRule = {
  /** The type of the redirection rule. */
  type: hn_HttpRedirectionType;
  /** The source URL of the redirection rule. */
  source: Scalars['String']['output'];
  /** The destination URL of the redirection rule. */
  destination: Scalars['String']['output'];
};

export type hn_HttpRedirectionType =
  /** A temporary redirect that corresponds to the 307 HTTP status code. */
  | 'TEMPORARY'
  /** A permanent redirect that corresponds to the 308 HTTP status code. */
  | 'PERMANENT';

/**
 * Connection to get list of posts in publications.
 * Returns a list of edges which contains the posts in publication and cursor to the last item of the previous page.
 */
export type hn_PublicationPostConnectionFilter = {
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tags?: InputMaybe<Array<Scalars['hn_ObjectId']['input']>>;
  /**
   * Filtering by tag slugs and tag IDs will return posts that match either of the filters.
   *
   * It is an "OR" filter and not an "AND" filter.
   */
  tagSlugs?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Remove pinned post from the result set. */
  excludePinnedPost?: InputMaybe<Scalars['Boolean']['input']>;
};

/**
 * Connection to get list of drafts in publications.
 * Returns a list of edges which contains the drafts in publication and cursor to the last item of the previous page.
 */
export type hn_PublicationDraftConnectionFilter = {
  /** Search filter will be applied to the title of a draft */
  search?: InputMaybe<Scalars['String']['input']>;
};

/** Contains the publication's beta features. */
export type hn_PublicationFeatures = {
  /** Newsletter feature for the publication which adds a `/newsletter` route for collecting subscribers and allows sending out newsletters. */
  newsletter: hn_NewsletterFeature;
  /** Show the view count for blog posts. */
  viewCount: hn_ViewCountFeature;
  /** Show the read time for blog posts. */
  readTime: hn_ReadTimeFeature;
  /** Audio player for blog posts. */
  audioBlog: hn_AudioBlogFeature;
  /** Widget that shows up if a text on a blog post is selected. Allows for easy sharing or copying of the selected text. */
  textSelectionSharer: hn_TextSelectionSharerFeature;
  /** Individual styling for the publication. */
  customCSS: hn_CustomCSSFeature;
};

/**
 * Contains the flag indicating if the newsletter feature is enabled or not.
 * User can enable or disable the newsletter feature from the publication settings.
 * Shows a newsletter prompt on blog if enabled.
 */
export type hn_NewsletterFeature = hn_Feature & {
  /** A flag indicating if the newsletter feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
  frequency?: Maybe<hn_NewsletterFrequency>;
};

export type hn_NewsletterFrequency =
  | 'asap'
  | 'weekly';

/**
 * Contains the flag indicating if the view count feature is enabled or not.
 * User can enable or disable the view count feature from the publication settings.
 * Shows total views on blogs if enabled.
 */
export type hn_ViewCountFeature = hn_Feature & {
  /** A flag indicating if the view count feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

/**
 * Contains the flag indicating if the read time feature is enabled or not.
 * User can enable or disable the read time feature from the publication settings.
 * Shows read time on blogs if enabled.
 */
export type hn_ReadTimeFeature = hn_Feature & {
  /** A flag indicating if the read time feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

/**
 * Contains the flag indicating if the audio blog feature is enabled or not.
 * User can enable or disable the audio blog feature from the publication settings.
 * Shows audio player on blogs if enabled.
 */
export type hn_AudioBlogFeature = hn_Feature & {
  /** A flag indicating if the audio blog feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
  /** The voice type for the audio blog. */
  voiceType: hn_AudioBlogVoiceType;
};

/**
 * Contains the flag indicating if the text selection sharer feature is enabled or not.
 * User can enable or disable the text selection sharer feature from the publication settings.
 * Shows a widget if a text on a blog post is selected. Allows for easy sharing or copying of the selected text.
 */
export type hn_TextSelectionSharerFeature = hn_Feature & {
  /** A flag indicating if the text selection sharer feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
};

export type hn_CustomCSSFeature = hn_Feature & {
  /** A flag indicating if the custom CSS feature is enabled or not. */
  isEnabled: Scalars['Boolean']['output'];
  /** CSS that is live. */
  published?: Maybe<hn_CustomCSS>;
  /** CSS that is not published yet. */
  draft?: Maybe<hn_CustomCSS>;
};

export type hn_CustomCSS = {
  /** Custom CSS that will be applied on the publication homepage. */
  home?: Maybe<Scalars['String']['output']>;
  /** Custom CSS that will be applied on all posts of the publication. */
  post?: Maybe<Scalars['String']['output']>;
  /** Custom CSS that will be applied on all static pages of the publication. */
  static?: Maybe<Scalars['String']['output']>;
  /** The same as `home` but minified. */
  homeMinified?: Maybe<Scalars['String']['output']>;
  /** The same as `post` but minified. */
  postMinified?: Maybe<Scalars['String']['output']>;
  /** The same as `static` but minified. */
  staticMinified?: Maybe<Scalars['String']['output']>;
};

export type hn_UrlPattern =
  /** Post URLs contain the slug (for example `my slug`) and a random id (like `1234`) , e.g. "/my-slug-1234". */
  | 'DEFAULT'
  /** Post URLs only contain the slug, e.g. "/my-slug". */
  | 'SIMPLE';

/** Contains publication's layout choices. */
export type hn_PublicationLayout =
  /** Changes the layout of blog into stacked list of posts. */
  | 'stacked'
  /** Changes the layout of blog into grid 3 post cards per row. */
  | 'grid'
  /**
   * Changes the layout of blog into magazine style.
   * This is the newest layout.
   */
  | 'magazine';

/** Contains the publication's domain information. */
export type hn_DomainInfo = {
  /**
   * The subdomain of the publication on hashnode.dev.
   *
   * It will redirect to you custom domain if it is present and ready.
   */
  hashnodeSubdomain?: Maybe<Scalars['String']['output']>;
  /** The domain of the publication. */
  domain?: Maybe<hn_DomainStatus>;
  /** The www prefixed domain of the publication. Says if redirect to www domain is configured. */
  wwwPrefixedDomain?: Maybe<hn_DomainStatus>;
};

/** Contains the publication's domain status. */
export type hn_DomainStatus = {
  /** The host of the publication domain. */
  host: Scalars['String']['output'];
  /** A flag indicating if the publication domain is ready. */
  ready: Scalars['Boolean']['output'];
};

/** Contains the publication's preferences for layout, theme and other personalisations. */
export type hn_Preferences = {
  /** The publication's logo url. */
  logo?: Maybe<Scalars['String']['output']>;
  /** The publication's darkmode preferences. Can be used to load blog in dark mode by default and add a custom dark mode logo. */
  darkMode?: Maybe<hn_DarkModePreferences>;
  /** An object containing pages enabled for the publication. */
  enabledPages?: Maybe<hn_PagesPreferences>;
  /** The items in the publication's navigation bar. */
  navbarItems: Array<hn_PublicationNavbarItem>;
  /** The selected publication's layout, can be stacked, grid or magazine. */
  layout?: Maybe<hn_PublicationLayout>;
  /** A flag indicating if the hashnode's footer branding is disabled for the publication. */
  disableFooterBranding?: Maybe<Scalars['Boolean']['output']>;
  /** A flag indicating if subscription popup needs to be shown to be shown for the publication */
  isSubscriptionModalDisabled?: Maybe<Scalars['Boolean']['output']>;
};

/** Contains the publication's navbar items. */
export type hn_PublicationNavbarItem = {
  /** The unique identifier of the navbar item. */
  id: Scalars['ID']['output'];
  /** The label of the navbar item. */
  label?: Maybe<Scalars['String']['output']>;
  /** The URL of the navbar item. */
  url?: Maybe<Scalars['String']['output']>;
  /** The order of the navbar item. */
  priority?: Maybe<Scalars['Int']['output']>;
  /** The type of the navbar item, can be series, link or page. */
  type: hn_PublicationNavigationType;
  /** The series added to the navbar item. */
  series?: Maybe<hn_Series>;
  /** The static page added to the navbar item. */
  page?: Maybe<hn_StaticPage>;
};

/** The type of the navbar item, can be series, link or page. */
export type hn_PublicationNavigationType =
  /** The navbar item is a series. */
  | 'series'
  /** The navbar item is a link. */
  | 'link'
  /** The navbar item is a static page. */
  | 'page';

/**
 * Contains the preferences publication's autogenerated pages.
 * Used to enable or disable pages like badge, newsletter and members.
 */
export type hn_PagesPreferences = {
  /** A flag indicating if the publication's badge page is enabled. */
  badges?: Maybe<Scalars['Boolean']['output']>;
  /** A flag indicating if the publication's newsletter page is enabled. */
  newsletter?: Maybe<Scalars['Boolean']['output']>;
  /** A flag indicating if the publication's member page is enabled. */
  members?: Maybe<Scalars['Boolean']['output']>;
};

/** Contains the publication's dark mode preferences. */
export type hn_DarkModePreferences = {
  /** A flag indicating if the dark mode is enabled for the publication. */
  enabled?: Maybe<Scalars['Boolean']['output']>;
  /** The custom dark mode logo of the publication. */
  logo?: Maybe<Scalars['String']['output']>;
};

/**
 * Contains the publication's integrations.
 * Used to connect the publication with third party services like Google Analytics, Facebook Pixel, etc.
 */
export type hn_PublicationIntegrations = {
  /** FB Pixel ID for integration with Facebook Pixel. */
  fbPixelID?: Maybe<Scalars['String']['output']>;
  /** Fathom Analytics Site ID for integration with Fathom Analytics. */
  fathomSiteID?: Maybe<Scalars['String']['output']>;
  /** A flag indicating if the custom domain is enabled for integration with Fathom Analytics. */
  fathomCustomDomainEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Custom domain for integration with Fathom Analytics. */
  fathomCustomDomain?: Maybe<Scalars['String']['output']>;
  /** Hotjar Site ID for integration with Hotjar. */
  hotjarSiteID?: Maybe<Scalars['String']['output']>;
  /** Matomo Site ID for integration with Matomo Analytics. */
  matomoSiteID?: Maybe<Scalars['String']['output']>;
  /** Matomo URL for integration with Matomo Analytics. */
  matomoURL?: Maybe<Scalars['String']['output']>;
  /** Google Analytics Tracking ID for integration with Google Analytics. */
  gaTrackingID?: Maybe<Scalars['String']['output']>;
  /** A flag indicating if the custom domain is enabled for integration with Plausible Analytics. */
  plausibleAnalyticsEnabled?: Maybe<Scalars['Boolean']['output']>;
  /** Web Monetization Payment Pointer for integration with Web Monetization. */
  wmPaymentPointer?: Maybe<Scalars['String']['output']>;
  /** The ID for the Hashnode-provided Umami analytics instance. */
  umamiWebsiteUUID?: Maybe<Scalars['String']['output']>;
};

/** Contains the publication's social media links. */
export type hn_PublicationLinks = {
  /** Twitter URL of the publication. */
  twitter?: Maybe<Scalars['String']['output']>;
  /** Instagram URL of the publication. */
  instagram?: Maybe<Scalars['String']['output']>;
  /** GitHub URL of the publication. */
  github?: Maybe<Scalars['String']['output']>;
  /** Website URL of the publication. */
  website?: Maybe<Scalars['String']['output']>;
  /** Hashnode profile of author of the publication. */
  hashnode?: Maybe<Scalars['String']['output']>;
  /** YouTube URL of the publication. */
  youtube?: Maybe<Scalars['String']['output']>;
  /** Daily.dev URL of the publication. */
  dailydev?: Maybe<Scalars['String']['output']>;
  /** LinkedIn URL of the publication. */
  linkedin?: Maybe<Scalars['String']['output']>;
  /** Mastodon URL of the publication. */
  mastodon?: Maybe<Scalars['String']['output']>;
};

/** The voice type for the audio blog. */
export type hn_AudioBlogVoiceType =
  /** Enum for the female voice type of the audio blog. */
  | 'FEMALE'
  /** Enum for the male voice type of the audio blog. */
  | 'MALE';

/** The status of the email import. */
export type hn_EmailImportStatus =
  /** Import has been initialized but is not yet in progress. */
  | 'INITIALIZED'
  /** Import is in progress. */
  | 'IN_PROGRESS'
  /** Import has to be reviewed by Hashnode. It is not yet reviewed. */
  | 'IN_REVIEW'
  /** Import was successful. New emails have been imported. */
  | 'SUCCESS'
  /** There was an error during the import. */
  | 'FAILED'
  /** The has been rejected. Nothing has been imported. */
  | 'REJECTED'
  /** The import has been acknowledged by the user. */
  | 'FINISHED';

/** Contains information about the email import. */
export type hn_EmailImport = {
  /** Contains information about the current import example if it is in progress or has finished, date started, etc */
  currentImport?: Maybe<hn_EmailCurrentImport>;
};

/** The input for the email import acknowledgement mutation. */
export type hn_EmailCurrentImport = {
  /** The status of the import */
  status: hn_EmailImportStatus;
  /** The date the import started */
  importStartedAt: Scalars['DateTime']['output'];
  /** The number of subscribers that have been successfully imported */
  successfullyImported?: Maybe<Scalars['Int']['output']>;
  /** The number of subscribers that have attempted to import */
  attemptedToImport?: Maybe<Scalars['Int']['output']>;
  /** The filename of the csv file containing emails */
  filename?: Maybe<Scalars['String']['output']>;
};

/** Contains a publication and a cursor for pagination. */
export type hn_RecommendedPublicationEdge = hn_Edge & {
  /** The node holding the Publication information */
  node: hn_Publication;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

export type hn_SubscribeToNewsletterInput = {
  /** The ID of the publication to subscribe to. */
  publicationId: Scalars['hn_ObjectId']['input'];
  /** The email of the subscriber. */
  email: Scalars['String']['input'];
};

export type hn_UnsubscribeFromNewsletterInput = {
  /** The ID of the publication to unsubscribe from. */
  publicationId: Scalars['hn_ObjectId']['input'];
  /** The email that is currently subscribed. */
  email: Scalars['String']['input'];
};

export type hn_NewsletterSubscribeStatus =
  | 'PENDING';

export type hn_SubscribeToNewsletterPayload = {
  status?: Maybe<hn_NewsletterSubscribeStatus>;
};

export type hn_NewsletterUnsubscribeStatus =
  | 'UNSUBSCRIBED';

export type hn_UnsubscribeFromNewsletterPayload = {
  status?: Maybe<hn_NewsletterUnsubscribeStatus>;
};

/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type hn_Post = hn_Node & {
  /** The ID of the post. Used to uniquely identify the post. */
  id: Scalars['ID']['output'];
  /** The slug of the post. Used as address of the post on blog. Example - https://johndoe.com/my-post-slug */
  slug: Scalars['String']['output'];
  /** The title of the post. */
  title: Scalars['String']['output'];
  /** The subtitle of the post. Subtitle is a short description of the post which is also used in SEO if meta tags are not provided. */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** Returns the user details of the author of the post. */
  author: hn_User;
  /**
   * Returns the user details of the co-authors of the post.
   * Hashnode users can add up to 4 co-authors as collaborators to their posts.
   * This functionality is limited to teams publication.
   */
  coAuthors?: Maybe<Array<hn_User>>;
  /** Returns list of tags added to the post. Contains tag id, name, slug, etc. */
  tags?: Maybe<Array<hn_Tag>>;
  /** Complete URL of the post including the domain name. Example - https://johndoe.com/my-post-slug */
  url: Scalars['String']['output'];
  /** Canonical URL set by author in case of republished posts. */
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** The publication the post belongs to. */
  publication?: Maybe<hn_Publication>;
  /** Unique ID to identify post, used internally by hashnode. */
  cuid?: Maybe<Scalars['String']['output']>;
  /** The cover image preference of the post. Contains cover image URL and other details. */
  coverImage?: Maybe<hn_PostCoverImage>;
  /** Brief is a short description of the post extracted from the content of the post. It's 250 characters long sanitized string. */
  brief: Scalars['String']['output'];
  /** The estimated time to read the post in minutes. */
  readTimeInMinutes: Scalars['Int']['output'];
  /** The number of views on the post. Can be used to show the popularity of the post. */
  views: Scalars['Int']['output'];
  /** Information of the series the post belongs to. */
  series?: Maybe<hn_Series>;
  /** The number of hearts on the post. Shows how many users liked the post. */
  reactionCount: Scalars['Int']['output'];
  /** The number of replies on the post. */
  replyCount: Scalars['Int']['output'];
  /** The number of comments on the post. */
  responseCount: Scalars['Int']['output'];
  /** Flag to indicate if the post is featured on Hashnode feed. */
  featured: Scalars['Boolean']['output'];
  /**
   * A list of contributors of the post. Contributors are users who have commented or replied to the post.
   * @deprecated Will be removed on 10th Oct 2023. Use `commenters` instead.
   */
  contributors: Array<hn_User>;
  /** List of users who have commented on the post. */
  commenters: hn_PostCommenterConnection;
  /** A list of comments on the post. */
  comments: hn_PostCommentConnection;
  /**
   * Flag to indicate if the post is bookmarked by the requesting user.
   *
   * Returns `false` if the user is not authenticated.
   */
  bookmarked: Scalars['Boolean']['output'];
  /** Content of the post. Contains HTML and Markdown version of the post content. */
  content: hn_Content;
  /** A list of users who liked the post. */
  likedBy: hn_PostLikerConnection;
  /** The date and time the post was featured. Used along with featured flag to determine if the post is featured. */
  featuredAt?: Maybe<Scalars['DateTime']['output']>;
  /** The date and time the post was published. */
  publishedAt: Scalars['DateTime']['output'];
  /** The date and time the post was last updated. */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Preference settings for the post. Contains information about if the post is pinned to blog, comments are disabled, etc. */
  preferences: hn_PostPreferences;
  /** Returns male and female audio url of the post. Available in case the Audioblog is enabled. */
  audioUrls?: Maybe<hn_AudioUrls>;
  /** SEO information of the post. Contains title and description used in meta tags. */
  seo?: Maybe<hn_SEO>;
  /** OG meta-data of the post. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<hn_OpenGraphMetaData>;
  /** A flag to indicate if the post contains LaTeX. Latex is used to write mathematical equations. */
  hasLatexInPost: Scalars['Boolean']['output'];
  /**
   * Wether or not the authenticated user is following this post.
   *
   * Returns `null` if the user is not authenticated.
   */
  isFollowed?: Maybe<Scalars['Boolean']['output']>;
  /** Wether or not the post has automatically been published via RSS feed. */
  isAutoPublishedFromRSS: Scalars['Boolean']['output'];
  /** Post feature-related fields. */
  features: hn_PostFeatures;
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type hn_PostcommentersArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<hn_PostCommenterSortBy>;
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type hn_PostcommentsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<hn_PostCommentSortBy>;
};


/**
 * Contains basic information about the post.
 * A post is a published article on Hashnode.
 */
export type hn_PostlikedByArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_PostLikerFilter>;
};

export type hn_PostFeatures = {
  tableOfContents: hn_TableOfContentsFeature;
  badges: hn_PostBadgesFeature;
};

export type hn_TableOfContentsFeature = hn_Feature & {
  /** Wether or not ser has chosen to show a table of contents on the post. */
  isEnabled: Scalars['Boolean']['output'];
  /** The content of the table of contents. */
  items: Array<hn_TableOfContentsItem>;
};

export type hn_PostBadgesFeature = hn_Feature & {
  /** Wether or not the user has chosen to show badges on the post. */
  isEnabled: Scalars['Boolean']['output'];
  items: Array<hn_PostBadge>;
};

export type hn_TableOfContentsItem = hn_Node & {
  /** Unique identifier. */
  id: Scalars['ID']['output'];
  /** The level of nesting. Refers to the heading level in the post. */
  level: Scalars['Int']['output'];
  /** The slug of the referenced headline. */
  slug: Scalars['String']['output'];
  /** The title of the referenced headline. */
  title: Scalars['String']['output'];
  /** ID of the `TableOfContentsItem` that is one level higher in the hierarchy. `null` if this is a top level item. */
  parentId?: Maybe<Scalars['ID']['output']>;
};

export type hn_PostBadge = hn_Node & {
  /** Unique identifier. */
  id: Scalars['ID']['output'];
  /** The type of the badge. */
  type: hn_PostBadgeType;
};

export type hn_PostBadgeType =
  | 'FEATURED_HASHNODE'
  | 'FEATURED_DAILY_DOT_DEV';

export type hn_PostLikerFilter = {
  /** Only return likes from users with the given user IDs. */
  userIds?: InputMaybe<Array<Scalars['ID']['input']>>;
};

/** Used when Audioblog feature is enabled. Contains URLs to the audioblog of the post. */
export type hn_AudioUrls = {
  /** Male version of audio url of the post. */
  male?: Maybe<Scalars['String']['output']>;
  /** Female version of audio url of the post. */
  female?: Maybe<Scalars['String']['output']>;
};

/** Contains Post preferences. Used to determine if the post is pinned to blog, comments are disabled, or cover image is sticked to bottom. */
export type hn_PostPreferences = {
  /** A flag to indicate if the post is pinned to blog. Pinned post is shown on top of the blog. */
  pinnedToBlog: Scalars['Boolean']['output'];
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments: Scalars['Boolean']['output'];
  /** A flag to indicate if the cover image is shown below title of the post. Default position of cover is top of title. */
  stickCoverToBottom: Scalars['Boolean']['output'];
  /** Wether or not the post is hidden from the Hashnode community. */
  isDelisted: Scalars['Boolean']['output'];
};

/** Sorting options for commenters. Used to sort commenters by popularity or recency. */
export type hn_PostCommenterSortBy =
  /** Sorts commenters by popularity. */
  | 'POPULAR'
  /** Sorts commenters by recency. */
  | 'RECENT';

/**
 * Connection for commenters (users). Contains a list of edges containing nodes.
 * Each node holds commenter.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of commenters.
 */
export type hn_PostCommenterConnection = hn_Connection & {
  /** A list of edges containing commenters as nodes. */
  edges: Array<hn_PostCommenterEdge>;
  /** Information about pagination in a connection. */
  pageInfo: hn_PageInfo;
  /** Total number of nodes available i.e. number of commenters. */
  totalDocuments: Scalars['Int']['output'];
};

/** A commenter on the post. Contains information about the user who commented. */
export type hn_PostCommenterEdge = hn_Edge & {
  /** The commenter on the post. */
  node: hn_User;
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String']['output'];
};

/** Sorting options for comments. Used to sort comments by top or recent. */
export type hn_PostCommentSortBy =
  /** Sorts comments by popularity. */
  | 'TOP'
  /** Sorts comments by recency. */
  | 'RECENT';

/**
 * Connection for comments. Contains a list of edges containing nodes.
 * Each node holds a comment.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of comments.
 */
export type hn_PostCommentConnection = hn_Connection & {
  /** A list of edges containing comments as nodes. */
  edges: Array<hn_PostCommentEdge>;
  /** Information about pagination in a connection. */
  pageInfo: hn_PageInfo;
  /** Total number of nodes available i.e. number of comments. */
  totalDocuments: Scalars['Int']['output'];
};

/** A comment on the post. Contains information about the content of the comment, user who commented, etc. */
export type hn_PostCommentEdge = hn_Edge & {
  /** The comment on the post. */
  node: hn_Comment;
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String']['output'];
};

/** A user who liked the post. Contains information about the user and number of reactions added by the user. */
export type hn_PostLikerEdge = hn_Edge & {
  /** The user who liked the post. */
  node: hn_User;
  /** The cursor for this node used for pagination. */
  cursor: Scalars['String']['output'];
  /** The number of reaction added by the user. */
  reactionCount: Scalars['Int']['output'];
};

/**
 * Connection for users who liked the post. Contains a list of edges containing nodes.
 * Each node is a user who liked the post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 * Total documents contains the total number of users who liked the post.
 */
export type hn_PostLikerConnection = hn_Connection & {
  /** A list of edges containing users as nodes */
  edges: Array<hn_PostLikerEdge>;
  /** Information about pagination in a connection. */
  pageInfo: hn_PageInfo;
  /** Total number of nodes available i.e. number of users who liked the post. */
  totalDocuments: Scalars['Int']['output'];
};

/** Contains information about the cover image of the post. */
export type hn_PostCoverImage = {
  /** The URL of the cover image. */
  url: Scalars['String']['output'];
  /** Indicates whether the cover image is in portrait orientation. */
  isPortrait: Scalars['Boolean']['output'];
  /** Provides attribution information for the cover image, if available. */
  attribution?: Maybe<Scalars['String']['output']>;
  /** The name of the photographer who captured the cover image. */
  photographer?: Maybe<Scalars['String']['output']>;
  /** True if the image attribution should be hidden. */
  isAttributionHidden: Scalars['Boolean']['output'];
};

/** Contains a post and a cursor for pagination. */
export type hn_PostEdge = hn_Edge & {
  /** The node holding the Post information */
  node: hn_Post;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/** The author type of a post from a user's perspective */
export type hn_PostAuthorType =
  /** The user has authored the post. */
  | 'AUTHOR'
  /** The user is a co-author of post. */
  | 'CO_AUTHOR';

/** Contains a post and the author status. */
export type hn_UserPostEdge = {
  /** The node holding the Post information. */
  node: hn_Post;
  /** Indicates weather the user is the author or co-author of the post. */
  authorType: hn_PostAuthorType;
};

/**
 * Connection for posts within a feed. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_FeedPostConnection = hn_Connection & {
  /** A list of edges containing Post information */
  edges: Array<hn_PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: hn_PageInfo;
};

/**
 * Connection for posts within a publication search. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_SearchPostConnection = hn_Connection & {
  /** A list of edges containing Post information */
  edges: Array<hn_PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: hn_PageInfo;
};

/**
 * Connection for posts within a series. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_SeriesPostConnection = hn_Connection & {
  /** A list of edges containing Post information */
  edges: Array<hn_PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: hn_PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/**
 * Connection for posts within a publication. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_PublicationPostConnection = hn_Connection & {
  /** A list of edges containing Post information */
  edges: Array<hn_PostEdge>;
  /** Information for pagination in Post connection. */
  pageInfo: hn_PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/**
 * Connection for posts written by a single user. Contains a list of edges containing nodes.
 * Each node is a post.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_UserPostConnection = hn_PageConnection & {
  /** A list of edges containing Post information */
  edges: Array<hn_UserPostEdge>;
  /** A list of posts */
  nodes: Array<hn_Post>;
  /** Information for page based pagination in Post connection. */
  pageInfo: hn_OffsetPageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

export type hn_PublishPostPayload = {
  post?: Maybe<hn_Post>;
};

export type hn_UpdatePostPayload = {
  post?: Maybe<hn_Post>;
};

/** Contains information about cover image options of the post. Like URL of the cover image, attribution, etc. */
export type hn_CoverImageOptionsInput = {
  /** The URL of the cover image. */
  coverImageURL?: InputMaybe<Scalars['String']['input']>;
  /** A flag to indicate if the cover attribution is hidden, used when cover was chosen from unsplash. */
  isCoverAttributionHidden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Information about the cover image attribution. */
  coverImageAttribution?: InputMaybe<Scalars['String']['input']>;
  /** The name of the cover image photographer, used when cover was chosen from unsplash. */
  coverImagePhotographer?: InputMaybe<Scalars['String']['input']>;
  /** A flag to indicate if the cover image is sticked to bottom. */
  stickCoverToBottom?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains information about meta tags of the post. Used for SEO purpose. */
export type hn_MetaTagsInput = {
  /** The title of the post used in og:title for SEO. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** The description of the post used in og:description for SEO. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The image URL of the post used in og:image for SEO. */
  image?: InputMaybe<Scalars['String']['input']>;
};

export type hn_PublishPostTagInput = {
  /**
   * A tag id that is referencing an existing tag.
   *
   * Either this or name and slug should be provided. If both are provided, the id will be used.
   */
  id?: InputMaybe<Scalars['hn_ObjectId']['input']>;
  /**
   * A slug of a new tag to create.
   *
   * Either this and name or id should be provided. If both are provided, the id will be used.
   */
  slug?: InputMaybe<Scalars['String']['input']>;
  /**
   * A name of a new tag to create.
   *
   * Either this and slug or id should be provided. If both are provided, the id will be used.
   */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type hn_UpdatePostSettingsInput = {
  /** A flag to indicate if the post contains table of content */
  isTableOfContentEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the post is delisted, used to hide the post from public feed. */
  delisted?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether or not comments should be disabled. */
  disableComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Pin the post to the blog homepage. */
  pinToBlog?: InputMaybe<Scalars['Boolean']['input']>;
};

export type hn_PublishPostSettingsInput = {
  /** A flag to indicate if the post is scheduled. */
  scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the post contains table of content */
  enableTableOfContent?: InputMaybe<Scalars['Boolean']['input']>;
  /** Flag to indicate if the slug is overridden by the user. */
  slugOverridden?: InputMaybe<Scalars['Boolean']['input']>;
  /** Wether to send a newsletter for this post. */
  isNewsletterActivated?: InputMaybe<Scalars['Boolean']['input']>;
  /** A flag to indicate if the post is delisted, used to hide the post from public feed. */
  delisted?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Contains information about the post to be published. */
export type hn_PublishPostInput = {
  /** The title of the post. */
  title: Scalars['String']['input'];
  /** The subtitle of the post. */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** The ID of publication the post belongs to. */
  publicationId: Scalars['hn_ObjectId']['input'];
  /** Content of the post in markdown format. */
  contentMarkdown: Scalars['String']['input'];
  /** Date when the post is published. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Options for the cover image of the post. */
  coverImageOptions?: InputMaybe<hn_CoverImageOptionsInput>;
  /** Slug of the post. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The URL of the original article if the post is imported from an external source. */
  originalArticleURL?: InputMaybe<Scalars['String']['input']>;
  /** A list of tags added to the post. */
  tags: Array<hn_PublishPostTagInput>;
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments?: InputMaybe<Scalars['Boolean']['input']>;
  /** Information about the meta tags added to the post, used for SEO purpose. */
  metaTags?: InputMaybe<hn_MetaTagsInput>;
  /**
   * Publish the post on behalf of another user who is a member of the publication.
   *
   * Only applicable for team publications.
   */
  publishAs?: InputMaybe<Scalars['hn_ObjectId']['input']>;
  /** Providing a seriesId will add the post to that series. */
  seriesId?: InputMaybe<Scalars['hn_ObjectId']['input']>;
  /** Settings for the post like table of contents and newsletter activation. */
  settings?: InputMaybe<hn_PublishPostSettingsInput>;
  /** Ids of the co-authors of the post. */
  coAuthors?: InputMaybe<Array<Scalars['hn_ObjectId']['input']>>;
};

export type hn_UpdatePostInput = {
  /** The id of the post to update. */
  id: Scalars['ID']['input'];
  /** The new title of the post */
  title?: InputMaybe<Scalars['String']['input']>;
  /** The subtitle of the post */
  subtitle?: InputMaybe<Scalars['String']['input']>;
  /** The publication the post is published to. */
  contentMarkdown?: InputMaybe<Scalars['String']['input']>;
  /** Backdated publish date. */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Options for the cover image of the post. */
  coverImageOptions?: InputMaybe<hn_CoverImageOptionsInput>;
  /** Slug of the post. Only if you want to override the slug that will be generated based on the title. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Canonical URL of the original article. */
  originalArticleURL?: InputMaybe<Scalars['String']['input']>;
  /** Tags to add to the post. New tags will be created if they don't exist. It overrides the existing tags. */
  tags?: InputMaybe<Array<hn_PublishPostTagInput>>;
  /** Information about the meta tags added to the post, used for SEO purpose. */
  metaTags?: InputMaybe<hn_MetaTagsInput>;
  /**
   * Set a different author for the post than the requesting user.
   * Must be a member of the publication.
   */
  publishAs?: InputMaybe<Scalars['hn_ObjectId']['input']>;
  /**
   * Update co-authors of the post.
   * Must be a member of the publication.
   */
  coAuthors?: InputMaybe<Array<Scalars['hn_ObjectId']['input']>>;
  /**
   * Providing a seriesId will add the post to that series.
   * Must be a series of the publication.
   */
  seriesId?: InputMaybe<Scalars['hn_ObjectId']['input']>;
  /** Whether or not to enable the table of content. */
  settings?: InputMaybe<hn_UpdatePostSettingsInput>;
  /** If the publication should be changed this is the new Publication ID */
  publicationId?: InputMaybe<Scalars['hn_ObjectId']['input']>;
};

export type hn_AddPostToSeriesInput = {
  /** The ID of the post to be added to the series. */
  postId: Scalars['hn_ObjectId']['input'];
  /** The ID of the series to which the post is to be added. */
  seriesId: Scalars['hn_ObjectId']['input'];
};

export type hn_AddPostToSeriesPayload = {
  /** The series to which the post was added. */
  series?: Maybe<hn_Series>;
};

/** Contains information about type of feed to be returned. */
export type hn_FeedType =
  /**
   * Returns only posts of the users you follow or publications you have subscribed to.
   *
   * Note: You have to be authenticated to use this feed type.
   */
  | 'FOLLOWING'
  /**
   * Returns only posts based on users following and interactions.
   *
   * Personalised feed is curated per requesting user basis.
   */
  | 'PERSONALIZED'
  /** Returns posts which were published recently, sorted based on recency. */
  | 'RECENT'
  /** Returns posts based on old personalization algorithm. */
  | 'RELEVANT'
  /** Returns posts which were featured, sorted based on recency. */
  | 'FEATURED'
  /** Returns posts which were bookmarked by the user, sorted based on recency. */
  | 'BOOKMARKS'
  /** Returns posts which were viewed by the user, sorted based on recency. */
  | 'READING_HISTORY';

export type hn_FeedFilter = {
  /** The type of feed to be returned. */
  type?: InputMaybe<hn_FeedType>;
  /** Adds a filter to return posts with minimum number of minutes required to read the post. */
  minReadTime?: InputMaybe<Scalars['Int']['input']>;
  /** Adds a filter to return posts with maximum number of minutes required to read the post. */
  maxReadTime?: InputMaybe<Scalars['Int']['input']>;
  /** Adds a filter to return posts with tagged with provided tags only. */
  tags?: InputMaybe<Array<Scalars['hn_ObjectId']['input']>>;
};

export type hn_SearchPostsOfPublicationFilter = {
  /** The query to be searched in post. */
  query: Scalars['String']['input'];
  /** The ID of publications to search from. */
  publicationId: Scalars['hn_ObjectId']['input'];
};

/**
 * Contains basic information about the comment.
 * A comment is a response to a post.
 */
export type hn_Comment = hn_Node & {
  /** The ID of the comment. */
  id: Scalars['ID']['output'];
  /** The content of the comment in markdown and html format. */
  content: hn_Content;
  /** The author of the comment. */
  author: hn_User;
  /** Returns a list of replies to the comment. */
  replies: hn_CommentReplyConnection;
  /** The date the comment was created. */
  dateAdded: Scalars['DateTime']['output'];
  /** A unique string identifying the comment. Used as element id in the DOM on hashnode blogs. */
  stamp?: Maybe<Scalars['String']['output']>;
  /** Total number of reactions on the comment. Reactions are hearts added to any comment. */
  totalReactions: Scalars['Int']['output'];
  /** Total number of reactions on the comment by the authenticated user. User must be authenticated to use this field. */
  myTotalReactions: Scalars['Int']['output'];
};


/**
 * Contains basic information about the comment.
 * A comment is a response to a post.
 */
export type hn_CommentrepliesArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
};

/**
 * Connection to get list of replies to a comment.
 * Returns a list of edges which contains the posts in publication and cursor to the last item of the previous page.
 */
export type hn_CommentReplyConnection = hn_Connection & {
  /**
   * A list of edges containing nodes in the connection.
   * A node contains a reply to a comment.
   */
  edges: Array<hn_CommentReplyEdge>;
  /** Information to aid in pagination. */
  pageInfo: hn_PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** An edge that contains a node of type reply and cursor to the node. */
export type hn_CommentReplyEdge = hn_Edge & {
  /** The node containing a reply to a comment. */
  node: hn_Reply;
  /** A cursor to the last item of the previous page. */
  cursor: Scalars['String']['output'];
};

/**
 * Contains basic information about the reply.
 * A reply is a response to a comment.
 */
export type hn_Reply = hn_Node & {
  /** The ID of the reply. */
  id: Scalars['ID']['output'];
  /** The content of the reply in markdown and html format. */
  content: hn_Content;
  /** The author of the reply. */
  author: hn_User;
  /** The date the reply was created. */
  dateAdded: Scalars['DateTime']['output'];
  /**
   * A unique string identifying the reply. Used as element id in the DOM on hashnode blogs.
   * It can be used to scroll to the reply in browser.
   */
  stamp?: Maybe<Scalars['String']['output']>;
  /** Total number of reactions on the reply. Reactions are hearts added to any reply. */
  totalReactions: Scalars['Int']['output'];
  /** Total number of reactions on the reply by the authenticated user. User must be authenticated to use this field. */
  myTotalReactions: Scalars['Int']['output'];
};

/**
 * Contains basic information about the series.
 * A series is a collection of posts that are related to each other.
 */
export type hn_Series = hn_Node & {
  /** The ID of the series. */
  id: Scalars['ID']['output'];
  /** The name of the series. Shown in series page. */
  name: Scalars['String']['output'];
  /** The date and time the series was created. */
  createdAt: Scalars['DateTime']['output'];
  /** The description of the series. Contains markdown and html version of the series's description. */
  description?: Maybe<hn_Content>;
  /** The cover image of the series. */
  coverImage?: Maybe<Scalars['String']['output']>;
  /** Returns the user who is author of the series. */
  author: hn_User;
  /** Unique identifier for the series. */
  cuid?: Maybe<Scalars['ID']['output']>;
  /** The slug of the series. Used to access series page.  Example https://johndoe.com/series/series-slug */
  slug: Scalars['String']['output'];
  /** The sort order of the series, determines if the latest posts should appear first or last in series. */
  sortOrder: hn_SortOrder;
  /** Returns a list of posts in the series. */
  posts: hn_SeriesPostConnection;
};


/**
 * Contains basic information about the series.
 * A series is a collection of posts that are related to each other.
 */
export type hn_SeriespostsArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
};

/** Contains a Series and a cursor for pagination. */
export type hn_SeriesEdge = hn_Edge & {
  /** The node holding the Series information */
  node: hn_Series;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/**
 * Connection for Series. Contains a list of edges containing nodes.
 * Each node is a Series.
 * Page info contains information about pagination like hasNextPage and endCursor.
 */
export type hn_SeriesConnection = hn_Connection & {
  /** A list of edges containing Series information */
  edges: Array<hn_SeriesEdge>;
  /** Information for pagination in SeriesList connection. */
  pageInfo: hn_PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/**
 * Contains basic information about the draft.
 * A draft is a post that is not published yet.
 */
export type hn_Draft = hn_Node & {
  /** The ID of the draft. */
  id: Scalars['ID']['output'];
  slug: Scalars['String']['output'];
  /** The title of the draft. It would become the title of the post when published. */
  title?: Maybe<Scalars['String']['output']>;
  /** The subtitle of the draft. It would become the subtitle of the post when published. */
  subtitle?: Maybe<Scalars['String']['output']>;
  /** The author of the draft. */
  author: hn_User;
  /**
   * Returns the user details of the co-authors of the post.
   * Hashnode users can add up to 4 co-authors as collaborators to their posts.
   * This functionality is limited to teams publication.
   */
  coAuthors?: Maybe<Array<hn_User>>;
  /** Returns list of tags added to the draft. Contains tag id, name, slug, etc. */
  tags: Array<hn_Tag>;
  canonicalUrl?: Maybe<Scalars['String']['output']>;
  /** The cover image preference of the draft. Contains cover image URL and other details. */
  coverImage?: Maybe<hn_DraftCoverImage>;
  readTimeInMinutes: Scalars['Int']['output'];
  /** Information of the series the draft belongs to. */
  series?: Maybe<hn_Series>;
  /** Content of the draft in HTML and markdown */
  content?: Maybe<hn_Content>;
  /**
   * The date the draft was updated.
   * @deprecated Use updatedAt instead. Will be removed on 26/12/2023.
   */
  dateUpdated: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  settings: hn_DraftSettings;
  /** SEO information of the draft. Contains title and description used in meta tags. */
  seo?: Maybe<hn_SEO>;
  /** OG meta-data of the draft. Contains image url used in open graph meta tags. */
  ogMetaData?: Maybe<hn_OpenGraphMetaData>;
  /** Draft feature-related fields. */
  features: hn_DraftFeatures;
  /** Information about the last backup of the draft. */
  lastBackup?: Maybe<hn_DraftBackup>;
  /** The date the draft was last successfully backed up. */
  lastSuccessfulBackupAt?: Maybe<Scalars['DateTime']['output']>;
  /** The date the draft last failed to back up. */
  lastFailedBackupAt?: Maybe<Scalars['DateTime']['output']>;
};

export type hn_DraftSettings = {
  /** A flag to indicate if the comments are disabled for the post. */
  disableComments: Scalars['Boolean']['output'];
  /** A flag to indicate if the cover image is shown below title of the post. Default position of cover is top of title. */
  stickCoverToBottom: Scalars['Boolean']['output'];
  /** Wether or not the post is hidden from the Hashnode community. */
  isDelisted: Scalars['Boolean']['output'];
};

export type hn_DraftFeatures = {
  tableOfContents: hn_TableOfContentsFeature;
};

export type hn_DraftBackup = {
  /** The status of the backup i.e., success or failure. */
  status?: Maybe<hn_BackupStatus>;
  /** The date the backup was created. */
  at?: Maybe<Scalars['DateTime']['output']>;
};

/** The status of the backup i.e., success or failure. */
export type hn_BackupStatus =
  /** The backup was successful. */
  | 'success'
  /** The backup failed. */
  | 'failed';

/**
 * Connection to get list of drafts.
 * Returns a list of edges which contains the draft and cursor to the last item of the previous page.
 */
export type hn_DraftConnection = hn_Connection & {
  /** A list of edges of drafts connection. */
  edges: Array<hn_DraftEdge>;
  /** Information to aid in pagination. */
  pageInfo: hn_PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** Contains information about the cover image of the draft. */
export type hn_DraftCoverImage = {
  /** The URL of the cover image. */
  url: Scalars['String']['output'];
  /** Provides attribution information for the cover image, if available. */
  attribution?: Maybe<Scalars['String']['output']>;
  /** The name of the photographer who captured the cover image. */
  photographer?: Maybe<Scalars['String']['output']>;
  /** True if the image attribution should be hidden. */
  isAttributionHidden: Scalars['Boolean']['output'];
};

/** An edge that contains a node of type draft and cursor to the node. */
export type hn_DraftEdge = hn_Edge & {
  /** A node in the connection containing a draft. */
  node: hn_Draft;
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
};

/**
 * Contains basic information about the beta feature.
 * A beta feature is a feature that is not yet released to all users.
 */
export type hn_BetaFeature = hn_Node & {
  /** The ID of the beta feature. */
  id: Scalars['ID']['output'];
  /** The key of the beta feature. */
  key: Scalars['String']['output'];
  /** The title of the beta feature. */
  title?: Maybe<Scalars['String']['output']>;
  /** The description of the beta feature. */
  description?: Maybe<Scalars['String']['output']>;
  /** The url of the beta feature. */
  url?: Maybe<Scalars['String']['output']>;
  /** The date the beta feature was created. */
  enabled: Scalars['Boolean']['output'];
};

/**
 * Contains basic information about the scheduled post.
 * A scheduled post is a post that is scheduled to be published in the future.
 */
export type hn_ScheduledPost = hn_Node & {
  /** The ID of the scheduled post. */
  id: Scalars['ID']['output'];
  /** The date the scheduled post was created. */
  author: hn_User;
  /** Returns the draft associated with the scheduled post. */
  draft?: Maybe<hn_Draft>;
  /** The scheduled date for the post to be published. This is the date the post will be published. */
  scheduledDate: Scalars['DateTime']['output'];
  /** Returns user who scheduled the post. This is usually the author of the post. */
  scheduledBy?: Maybe<hn_User>;
  /** Returns the publication the post is scheduled for. */
  publication: hn_Publication;
};

export type hn_ReschedulePostInput = {
  /** The Draft ID of the scheduled post. */
  draftId: Scalars['hn_ObjectId']['input'];
  /** New scheduled date for the post to be rescheduled. */
  scheduledDate: Scalars['DateTime']['input'];
};

export type hn_ScheduledPostPayload = {
  /** Payload returned in response of reschedulePost mutation. */
  payload: hn_ScheduledPost;
};

/**
 * Contains basic information about the static page.
 * Static pages are pages that are written in markdown and can be added to blog.
 */
export type hn_StaticPage = hn_Node & {
  /** The ID of the static page. */
  id: Scalars['ID']['output'];
  /** The title of the static page. Shown in nav bar. */
  title: Scalars['String']['output'];
  /** The slug of the static page. Used to access static page.  Example https://johndoe.com/my-page */
  slug: Scalars['String']['output'];
  /** Content of the static page. Contains markdown and html version of the static page's content. */
  content: hn_Content;
  /** A flag to determine if the static page is hidden from public or not, this is used to hide the page instead of deleting it. */
  hidden: Scalars['Boolean']['output'];
  /** Information about the static page's Open Graph metadata i.e. image. */
  ogMetaData?: Maybe<hn_OpenGraphMetaData>;
  /** Information about the static page's SEO metadata i.e. title and description. */
  seo?: Maybe<hn_SEO>;
};

/**
 * Connection to get list of static pages.
 * Returns a list of edges which contains the static page and cursor to the last item of the previous page.
 */
export type hn_StaticPageConnection = hn_Connection & {
  /** A list of edges containing nodes in the connection. */
  edges: Array<hn_StaticPageEdge>;
  /** Information to aid in pagination. */
  pageInfo: hn_PageInfo;
  /** The total number of documents in the connection. */
  totalDocuments: Scalars['Int']['output'];
};

/** An edge that contains a node of type static page and cursor to the node. */
export type hn_StaticPageEdge = hn_Edge & {
  /** The node containing a static page. */
  node: hn_StaticPage;
  /** A cursor to the last item of the previous page. */
  cursor: Scalars['String']['output'];
};

export type hn_Webhook = hn_Node & {
  /** The ID of the post. Used to uniquely identify the post. */
  id: Scalars['ID']['output'];
  publication: hn_Publication;
  url: Scalars['String']['output'];
  events: Array<hn_WebhookEvent>;
  secret: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  /**
   * Messages that has been sent via this webhook.
   * Messages include the request and eventual response.
   */
  messages: hn_WebhookMessageConnection;
};


export type hn_WebhookmessagesArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
};

export type hn_WebhookEvent =
  | 'POST_PUBLISHED'
  | 'POST_UPDATED'
  | 'POST_DELETED'
  | 'STATIC_PAGE_PUBLISHED'
  | 'STATIC_PAGE_EDITED'
  | 'STATIC_PAGE_DELETED';

export type hn_WebhookMessageConnection = hn_Connection & {
  edges: Array<hn_WebhookMessageEdge>;
  pageInfo: hn_PageInfo;
};

export type hn_WebhookMessageEdge = hn_Edge & {
  node: hn_WebhookMessage;
  cursor: Scalars['String']['output'];
};

export type hn_WebhookMessage = hn_Node & {
  id: Scalars['ID']['output'];
  url: Scalars['String']['output'];
  event: hn_WebhookEvent;
  /** True if either the request failed or the response status code was not 2xx. */
  isError: Scalars['Boolean']['output'];
  /** True if the message was sent as a test. */
  isTest: Scalars['Boolean']['output'];
  /** True if the message was resent. */
  isResent: Scalars['Boolean']['output'];
  request: hn_WebhookMessageRequest;
  response?: Maybe<hn_WebhookMessageResponse>;
  createdAt: Scalars['DateTime']['output'];
};

export type hn_WebhookMessageRequest = {
  /** Unique identifier of the request. Can be used to deduplicate requests. */
  uuid: Scalars['String']['output'];
  headers: Scalars['String']['output'];
  body: Scalars['String']['output'];
  error?: Maybe<hn_WebhookMessageRequestError>;
};

export type hn_WebhookMessageRequestError = {
  code: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export type hn_WebhookMessageResponse = {
  httpStatus: Scalars['Int']['output'];
  headers?: Maybe<Scalars['String']['output']>;
  body?: Maybe<Scalars['String']['output']>;
  /** The time it took from the moment the request has been send until the first byte of the response has been received. */
  timeToFirstByteMilliseconds?: Maybe<Scalars['Int']['output']>;
};

export type HashnodeQuery = {
  /** Returns the user with the username. */
  hn_user?: Maybe<hn_User>;
  /** Returns users who have most actively participated in discussions by commenting in the last 7 days. */
  hn_topCommenters: hn_CommenterUserConnection;
  /** Returns the current authenticated user. Only available to the authenticated user. */
  hn_me: hn_MyUser;
  /** Returns tag details by its slug. */
  hn_tag?: Maybe<hn_Tag>;
  /**
   * Returns the publication with the given ID or host.
   * User can pass anyone of them.
   */
  hn_publication?: Maybe<hn_Publication>;
  /**
   * Returns a paginated list of posts based on the provided filter.
   * Used in Hashnode home feed.
   */
  hn_feed: hn_FeedPostConnection;
  /** Returns a paginated list of posts based on search query for a particular publication id. */
  hn_searchPostsOfPublication: hn_SearchPostConnection;
  /**
   * Returns a draft by ID.
   * Draft is a post that is not published yet.
   */
  hn_draft?: Maybe<hn_Draft>;
  /** Get a scheduled post by ID. */
  hn_scheduledPost?: Maybe<hn_ScheduledPost>;
};


export type HashnodeQueryhn_userArgs = {
  username: Scalars['String']['input'];
};


export type HashnodeQueryhn_topCommentersArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
};


export type HashnodeQueryhn_tagArgs = {
  slug: Scalars['String']['input'];
};


export type HashnodeQueryhn_publicationArgs = {
  id?: InputMaybe<Scalars['hn_ObjectId']['input']>;
  host?: InputMaybe<Scalars['String']['input']>;
};


export type HashnodeQueryhn_feedArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<hn_FeedFilter>;
};


export type HashnodeQueryhn_searchPostsOfPublicationArgs = {
  first: Scalars['Int']['input'];
  after?: InputMaybe<Scalars['String']['input']>;
  filter: hn_SearchPostsOfPublicationFilter;
};


export type HashnodeQueryhn_draftArgs = {
  id: Scalars['hn_ObjectId']['input'];
};


export type HashnodeQueryhn_scheduledPostArgs = {
  id?: InputMaybe<Scalars['hn_ObjectId']['input']>;
};

export type HashnodeMutation = {
  /**
   * Update the follow state for the user that is provided via id or username.
   * If the authenticated user does not follow the user, the mutation will follow the user.
   * If the authenticated user already follows the user, the mutation will un-follow the user.
   * Only available to the authenticated user.
   */
  hn_toggleFollowUser: hn_ToggleFollowUserPayload;
  hn_subscribeToNewsletter: hn_SubscribeToNewsletterPayload;
  hn_unsubscribeFromNewsletter: hn_UnsubscribeFromNewsletterPayload;
  /** Creates a new post. */
  hn_publishPost: hn_PublishPostPayload;
  /** Adds a post to a series. */
  hn_addPostToSeries: hn_AddPostToSeriesPayload;
  hn_updatePost: hn_UpdatePostPayload;
  /** Reschedule a post. */
  hn_reschedulePost?: Maybe<hn_ScheduledPostPayload>;
};


export type HashnodeMutationhn_toggleFollowUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type HashnodeMutationhn_subscribeToNewsletterArgs = {
  input: hn_SubscribeToNewsletterInput;
};


export type HashnodeMutationhn_unsubscribeFromNewsletterArgs = {
  input: hn_UnsubscribeFromNewsletterInput;
};


export type HashnodeMutationhn_publishPostArgs = {
  input: hn_PublishPostInput;
};


export type HashnodeMutationhn_addPostToSeriesArgs = {
  input: hn_AddPostToSeriesInput;
};


export type HashnodeMutationhn_updatePostArgs = {
  input: hn_UpdatePostInput;
};


export type HashnodeMutationhn_reschedulePostArgs = {
  input: hn_ReschedulePostInput;
};

  export type QuerySdk = {
      /** undefined **/
  Hashnode: InContextSdkMethod<Query['Hashnode'], {}, MeshContext>
  };

  export type MutationSdk = {
      /** undefined **/
  Hashnode: InContextSdkMethod<Mutation['Hashnode'], {}, MeshContext>
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["Hashnode"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
