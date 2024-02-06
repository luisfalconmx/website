import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  Dimension: { input: any; output: any }
  HexColor: { input: any; output: any }
  JSON: { input: any; output: any }
  Quality: { input: any; output: any }
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  fileName?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Int']['output']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Int']['output']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']['input']>
  contentType_contains?: InputMaybe<Scalars['String']['input']>
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentType_not?: InputMaybe<Scalars['String']['input']>
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName?: InputMaybe<Scalars['String']['input']>
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName_not?: InputMaybe<Scalars['String']['input']>
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  height?: InputMaybe<Scalars['Int']['input']>
  height_exists?: InputMaybe<Scalars['Boolean']['input']>
  height_gt?: InputMaybe<Scalars['Int']['input']>
  height_gte?: InputMaybe<Scalars['Int']['input']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  height_lt?: InputMaybe<Scalars['Int']['input']>
  height_lte?: InputMaybe<Scalars['Int']['input']>
  height_not?: InputMaybe<Scalars['Int']['input']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size?: InputMaybe<Scalars['Int']['input']>
  size_exists?: InputMaybe<Scalars['Boolean']['input']>
  size_gt?: InputMaybe<Scalars['Int']['input']>
  size_gte?: InputMaybe<Scalars['Int']['input']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size_lt?: InputMaybe<Scalars['Int']['input']>
  size_lte?: InputMaybe<Scalars['Int']['input']>
  size_not?: InputMaybe<Scalars['Int']['input']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  width?: InputMaybe<Scalars['Int']['input']>
  width_exists?: InputMaybe<Scalars['Boolean']['input']>
  width_gt?: InputMaybe<Scalars['Int']['input']>
  width_gte?: InputMaybe<Scalars['Int']['input']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  width_lt?: InputMaybe<Scalars['Int']['input']>
  width_lte?: InputMaybe<Scalars['Int']['input']>
  width_not?: InputMaybe<Scalars['Int']['input']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  certificationCollection?: Maybe<CertificationCollection>
  entryCollection?: Maybe<EntryCollection>
  experienceCollection?: Maybe<ExperienceCollection>
  profileCollection?: Maybe<ProfileCollection>
  projectCollection?: Maybe<ProjectCollection>
  socialMediaCollection?: Maybe<SocialMediaCollection>
  technologyCollection?: Maybe<TechnologyCollection>
}

export type AssetLinkingCollectionsCertificationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsProfileCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type AssetLinkingCollectionsTechnologyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type Certification = Entry & {
  __typename?: 'Certification'
  contentfulMetadata: ContentfulMetadata
  credentialId?: Maybe<Scalars['String']['output']>
  credentialUrl?: Maybe<Scalars['String']['output']>
  expirationDate?: Maybe<Scalars['DateTime']['output']>
  issueDate?: Maybe<Scalars['DateTime']['output']>
  issuingOrganization?: Maybe<Scalars['String']['output']>
  issuingOrganizationImage?: Maybe<Asset>
  linkedFrom?: Maybe<CertificationLinkingCollections>
  name?: Maybe<Scalars['String']['output']>
  picture?: Maybe<Asset>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationCredentialIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationCredentialUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationExpirationDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationIssueDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationIssuingOrganizationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationIssuingOrganizationImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/certification) */
export type CertificationPictureArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type CertificationCollection = {
  __typename?: 'CertificationCollection'
  items: Array<Maybe<Certification>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type CertificationFilter = {
  AND?: InputMaybe<Array<InputMaybe<CertificationFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CertificationFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  credentialId?: InputMaybe<Scalars['String']['input']>
  credentialId_contains?: InputMaybe<Scalars['String']['input']>
  credentialId_exists?: InputMaybe<Scalars['Boolean']['input']>
  credentialId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  credentialId_not?: InputMaybe<Scalars['String']['input']>
  credentialId_not_contains?: InputMaybe<Scalars['String']['input']>
  credentialId_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  credentialUrl?: InputMaybe<Scalars['String']['input']>
  credentialUrl_contains?: InputMaybe<Scalars['String']['input']>
  credentialUrl_exists?: InputMaybe<Scalars['Boolean']['input']>
  credentialUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  credentialUrl_not?: InputMaybe<Scalars['String']['input']>
  credentialUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  credentialUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  expirationDate?: InputMaybe<Scalars['DateTime']['input']>
  expirationDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  expirationDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  expirationDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  expirationDate_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  expirationDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  expirationDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  expirationDate_not?: InputMaybe<Scalars['DateTime']['input']>
  expirationDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  issueDate?: InputMaybe<Scalars['DateTime']['input']>
  issueDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  issueDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  issueDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  issueDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  issueDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  issueDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  issueDate_not?: InputMaybe<Scalars['DateTime']['input']>
  issueDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  issuingOrganization?: InputMaybe<Scalars['String']['input']>
  issuingOrganizationImage_exists?: InputMaybe<Scalars['Boolean']['input']>
  issuingOrganization_contains?: InputMaybe<Scalars['String']['input']>
  issuingOrganization_exists?: InputMaybe<Scalars['Boolean']['input']>
  issuingOrganization_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  issuingOrganization_not?: InputMaybe<Scalars['String']['input']>
  issuingOrganization_not_contains?: InputMaybe<Scalars['String']['input']>
  issuingOrganization_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  picture_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
}

export type CertificationLinkingCollections = {
  __typename?: 'CertificationLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type CertificationLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum CertificationOrder {
  CredentialIdAsc = 'credentialId_ASC',
  CredentialIdDesc = 'credentialId_DESC',
  CredentialUrlAsc = 'credentialUrl_ASC',
  CredentialUrlDesc = 'credentialUrl_DESC',
  ExpirationDateAsc = 'expirationDate_ASC',
  ExpirationDateDesc = 'expirationDate_DESC',
  IssueDateAsc = 'issueDate_ASC',
  IssueDateDesc = 'issueDate_DESC',
  IssuingOrganizationAsc = 'issuingOrganization_ASC',
  IssuingOrganizationDesc = 'issuingOrganization_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type Experience = Entry & {
  __typename?: 'Experience'
  companyImage?: Maybe<Asset>
  companyName?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  currentWork?: Maybe<Scalars['Boolean']['output']>
  description?: Maybe<Scalars['String']['output']>
  employmentType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  endDate?: Maybe<Scalars['DateTime']['output']>
  industry?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<ExperienceLinkingCollections>
  location?: Maybe<Scalars['String']['output']>
  locationType?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  startDate?: Maybe<Scalars['DateTime']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceCompanyImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceCompanyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceCurrentWorkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceEmploymentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceIndustryArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceLocationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceLocationTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/experience) */
export type ExperienceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ExperienceCollection = {
  __typename?: 'ExperienceCollection'
  items: Array<Maybe<Experience>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ExperienceFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ExperienceFilter>>>
  companyImage_exists?: InputMaybe<Scalars['Boolean']['input']>
  companyName?: InputMaybe<Scalars['String']['input']>
  companyName_contains?: InputMaybe<Scalars['String']['input']>
  companyName_exists?: InputMaybe<Scalars['Boolean']['input']>
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  companyName_not?: InputMaybe<Scalars['String']['input']>
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  currentWork?: InputMaybe<Scalars['Boolean']['input']>
  currentWork_exists?: InputMaybe<Scalars['Boolean']['input']>
  currentWork_not?: InputMaybe<Scalars['Boolean']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  employmentType_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  employmentType_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  employmentType_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  employmentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  endDate?: InputMaybe<Scalars['DateTime']['input']>
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  industry?: InputMaybe<Scalars['String']['input']>
  industry_contains?: InputMaybe<Scalars['String']['input']>
  industry_exists?: InputMaybe<Scalars['Boolean']['input']>
  industry_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  industry_not?: InputMaybe<Scalars['String']['input']>
  industry_not_contains?: InputMaybe<Scalars['String']['input']>
  industry_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  location?: InputMaybe<Scalars['String']['input']>
  locationType_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  locationType_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  locationType_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  locationType_exists?: InputMaybe<Scalars['Boolean']['input']>
  location_contains?: InputMaybe<Scalars['String']['input']>
  location_exists?: InputMaybe<Scalars['Boolean']['input']>
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  location_not?: InputMaybe<Scalars['String']['input']>
  location_not_contains?: InputMaybe<Scalars['String']['input']>
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  startDate?: InputMaybe<Scalars['DateTime']['input']>
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ExperienceLinkingCollections = {
  __typename?: 'ExperienceLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ExperienceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ExperienceOrder {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  CurrentWorkAsc = 'currentWork_ASC',
  CurrentWorkDesc = 'currentWork_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IndustryAsc = 'industry_ASC',
  IndustryDesc = 'industry_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type Profile = Entry & {
  __typename?: 'Profile'
  contentfulMetadata: ContentfulMetadata
  cv?: Maybe<Asset>
  englishLevel?: Maybe<Scalars['String']['output']>
  heroDescription?: Maybe<ProfileHeroDescription>
  heroHeadline?: Maybe<ProfileHeroHeadline>
  linkedFrom?: Maybe<ProfileLinkingCollections>
  picture?: Maybe<Asset>
  socialLinksCollection?: Maybe<ProfileSocialLinksCollection>
  sys: Sys
  username?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfileCvArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfileEnglishLevelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfileHeroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfileHeroHeadlineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfileLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfilePictureArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfileSocialLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/profile) */
export type ProfileUsernameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ProfileCollection = {
  __typename?: 'ProfileCollection'
  items: Array<Maybe<Profile>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ProfileFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProfileFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProfileFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  cv_exists?: InputMaybe<Scalars['Boolean']['input']>
  englishLevel?: InputMaybe<Scalars['String']['input']>
  englishLevel_contains?: InputMaybe<Scalars['String']['input']>
  englishLevel_exists?: InputMaybe<Scalars['Boolean']['input']>
  englishLevel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  englishLevel_not?: InputMaybe<Scalars['String']['input']>
  englishLevel_not_contains?: InputMaybe<Scalars['String']['input']>
  englishLevel_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  heroDescription_contains?: InputMaybe<Scalars['String']['input']>
  heroDescription_exists?: InputMaybe<Scalars['Boolean']['input']>
  heroDescription_not_contains?: InputMaybe<Scalars['String']['input']>
  heroHeadline_contains?: InputMaybe<Scalars['String']['input']>
  heroHeadline_exists?: InputMaybe<Scalars['Boolean']['input']>
  heroHeadline_not_contains?: InputMaybe<Scalars['String']['input']>
  picture_exists?: InputMaybe<Scalars['Boolean']['input']>
  socialLinksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
  username?: InputMaybe<Scalars['String']['input']>
  username_contains?: InputMaybe<Scalars['String']['input']>
  username_exists?: InputMaybe<Scalars['Boolean']['input']>
  username_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  username_not?: InputMaybe<Scalars['String']['input']>
  username_not_contains?: InputMaybe<Scalars['String']['input']>
  username_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ProfileHeroDescription = {
  __typename?: 'ProfileHeroDescription'
  json: Scalars['JSON']['output']
  links: ProfileHeroDescriptionLinks
}

export type ProfileHeroDescriptionAssets = {
  __typename?: 'ProfileHeroDescriptionAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type ProfileHeroDescriptionEntries = {
  __typename?: 'ProfileHeroDescriptionEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type ProfileHeroDescriptionLinks = {
  __typename?: 'ProfileHeroDescriptionLinks'
  assets: ProfileHeroDescriptionAssets
  entries: ProfileHeroDescriptionEntries
  resources: ProfileHeroDescriptionResources
}

export type ProfileHeroDescriptionResources = {
  __typename?: 'ProfileHeroDescriptionResources'
  block: Array<ResourceLink>
  hyperlink: Array<ResourceLink>
  inline: Array<ResourceLink>
}

export type ProfileHeroHeadline = {
  __typename?: 'ProfileHeroHeadline'
  json: Scalars['JSON']['output']
  links: ProfileHeroHeadlineLinks
}

export type ProfileHeroHeadlineAssets = {
  __typename?: 'ProfileHeroHeadlineAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type ProfileHeroHeadlineEntries = {
  __typename?: 'ProfileHeroHeadlineEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type ProfileHeroHeadlineLinks = {
  __typename?: 'ProfileHeroHeadlineLinks'
  assets: ProfileHeroHeadlineAssets
  entries: ProfileHeroHeadlineEntries
  resources: ProfileHeroHeadlineResources
}

export type ProfileHeroHeadlineResources = {
  __typename?: 'ProfileHeroHeadlineResources'
  block: Array<ResourceLink>
  hyperlink: Array<ResourceLink>
  inline: Array<ResourceLink>
}

export type ProfileLinkingCollections = {
  __typename?: 'ProfileLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ProfileLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ProfileOrder {
  EnglishLevelAsc = 'englishLevel_ASC',
  EnglishLevelDesc = 'englishLevel_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC'
}

export type ProfileSocialLinksCollection = {
  __typename?: 'ProfileSocialLinksCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type Project = Entry & {
  __typename?: 'Project'
  budget?: Maybe<Scalars['Float']['output']>
  clientName?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  createdDate?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  designDescription?: Maybe<ProjectDesignDescription>
  featuredImage?: Maybe<Asset>
  licenseName?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<ProjectLinkingCollections>
  name?: Maybe<Scalars['String']['output']>
  overview?: Maybe<ProjectOverview>
  prototypeUrl?: Maybe<Scalars['String']['output']>
  screenshotsCollection?: Maybe<AssetCollection>
  sys: Sys
  technologiesCollection?: Maybe<ProjectTechnologiesCollection>
  timeSpend?: Maybe<Scalars['Int']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectBudgetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectClientNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectCreatedDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectDesignDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectFeaturedImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectLicenseNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectOverviewArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectPrototypeUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectScreenshotsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectTechnologiesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/project) */
export type ProjectTimeSpendArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ProjectCollection = {
  __typename?: 'ProjectCollection'
  items: Array<Maybe<Project>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ProjectDesignDescription = {
  __typename?: 'ProjectDesignDescription'
  json: Scalars['JSON']['output']
  links: ProjectDesignDescriptionLinks
}

export type ProjectDesignDescriptionAssets = {
  __typename?: 'ProjectDesignDescriptionAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type ProjectDesignDescriptionEntries = {
  __typename?: 'ProjectDesignDescriptionEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type ProjectDesignDescriptionLinks = {
  __typename?: 'ProjectDesignDescriptionLinks'
  assets: ProjectDesignDescriptionAssets
  entries: ProjectDesignDescriptionEntries
  resources: ProjectDesignDescriptionResources
}

export type ProjectDesignDescriptionResources = {
  __typename?: 'ProjectDesignDescriptionResources'
  block: Array<ResourceLink>
  hyperlink: Array<ResourceLink>
  inline: Array<ResourceLink>
}

export type ProjectFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>
  budget?: InputMaybe<Scalars['Float']['input']>
  budget_exists?: InputMaybe<Scalars['Boolean']['input']>
  budget_gt?: InputMaybe<Scalars['Float']['input']>
  budget_gte?: InputMaybe<Scalars['Float']['input']>
  budget_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  budget_lt?: InputMaybe<Scalars['Float']['input']>
  budget_lte?: InputMaybe<Scalars['Float']['input']>
  budget_not?: InputMaybe<Scalars['Float']['input']>
  budget_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  clientName?: InputMaybe<Scalars['String']['input']>
  clientName_contains?: InputMaybe<Scalars['String']['input']>
  clientName_exists?: InputMaybe<Scalars['Boolean']['input']>
  clientName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  clientName_not?: InputMaybe<Scalars['String']['input']>
  clientName_not_contains?: InputMaybe<Scalars['String']['input']>
  clientName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  createdDate?: InputMaybe<Scalars['DateTime']['input']>
  createdDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  createdDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  createdDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  createdDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  createdDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  createdDate_not?: InputMaybe<Scalars['DateTime']['input']>
  createdDate_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  designDescription_contains?: InputMaybe<Scalars['String']['input']>
  designDescription_exists?: InputMaybe<Scalars['Boolean']['input']>
  designDescription_not_contains?: InputMaybe<Scalars['String']['input']>
  featuredImage_exists?: InputMaybe<Scalars['Boolean']['input']>
  licenseName?: InputMaybe<Scalars['String']['input']>
  licenseName_contains?: InputMaybe<Scalars['String']['input']>
  licenseName_exists?: InputMaybe<Scalars['Boolean']['input']>
  licenseName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  licenseName_not?: InputMaybe<Scalars['String']['input']>
  licenseName_not_contains?: InputMaybe<Scalars['String']['input']>
  licenseName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  overview_contains?: InputMaybe<Scalars['String']['input']>
  overview_exists?: InputMaybe<Scalars['Boolean']['input']>
  overview_not_contains?: InputMaybe<Scalars['String']['input']>
  prototypeUrl?: InputMaybe<Scalars['String']['input']>
  prototypeUrl_contains?: InputMaybe<Scalars['String']['input']>
  prototypeUrl_exists?: InputMaybe<Scalars['Boolean']['input']>
  prototypeUrl_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  prototypeUrl_not?: InputMaybe<Scalars['String']['input']>
  prototypeUrl_not_contains?: InputMaybe<Scalars['String']['input']>
  prototypeUrl_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  screenshotsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
  technologiesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  timeSpend?: InputMaybe<Scalars['Int']['input']>
  timeSpend_exists?: InputMaybe<Scalars['Boolean']['input']>
  timeSpend_gt?: InputMaybe<Scalars['Int']['input']>
  timeSpend_gte?: InputMaybe<Scalars['Int']['input']>
  timeSpend_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  timeSpend_lt?: InputMaybe<Scalars['Int']['input']>
  timeSpend_lte?: InputMaybe<Scalars['Int']['input']>
  timeSpend_not?: InputMaybe<Scalars['Int']['input']>
  timeSpend_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type ProjectLinkingCollections = {
  __typename?: 'ProjectLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ProjectLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ProjectOrder {
  BudgetAsc = 'budget_ASC',
  BudgetDesc = 'budget_DESC',
  ClientNameAsc = 'clientName_ASC',
  ClientNameDesc = 'clientName_DESC',
  CreatedDateAsc = 'createdDate_ASC',
  CreatedDateDesc = 'createdDate_DESC',
  LicenseNameAsc = 'licenseName_ASC',
  LicenseNameDesc = 'licenseName_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PrototypeUrlAsc = 'prototypeUrl_ASC',
  PrototypeUrlDesc = 'prototypeUrl_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TimeSpendAsc = 'timeSpend_ASC',
  TimeSpendDesc = 'timeSpend_DESC'
}

export type ProjectOverview = {
  __typename?: 'ProjectOverview'
  json: Scalars['JSON']['output']
  links: ProjectOverviewLinks
}

export type ProjectOverviewAssets = {
  __typename?: 'ProjectOverviewAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type ProjectOverviewEntries = {
  __typename?: 'ProjectOverviewEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type ProjectOverviewLinks = {
  __typename?: 'ProjectOverviewLinks'
  assets: ProjectOverviewAssets
  entries: ProjectOverviewEntries
  resources: ProjectOverviewResources
}

export type ProjectOverviewResources = {
  __typename?: 'ProjectOverviewResources'
  block: Array<ResourceLink>
  hyperlink: Array<ResourceLink>
  inline: Array<ResourceLink>
}

export type ProjectTechnologiesCollection = {
  __typename?: 'ProjectTechnologiesCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type Query = {
  __typename?: 'Query'
  _node?: Maybe<_Node>
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  certification?: Maybe<Certification>
  certificationCollection?: Maybe<CertificationCollection>
  entryCollection?: Maybe<EntryCollection>
  experience?: Maybe<Experience>
  experienceCollection?: Maybe<ExperienceCollection>
  profile?: Maybe<Profile>
  profileCollection?: Maybe<ProfileCollection>
  project?: Maybe<Project>
  projectCollection?: Maybe<ProjectCollection>
  skills?: Maybe<Skills>
  skillsCollection?: Maybe<SkillsCollection>
  socialMedia?: Maybe<SocialMedia>
  socialMediaCollection?: Maybe<SocialMediaCollection>
  technology?: Maybe<Technology>
  technologyCollection?: Maybe<TechnologyCollection>
}

export type Query_NodeArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetFilter>
}

export type QueryCertificationArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryCertificationCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<CertificationOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CertificationFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<EntryFilter>
}

export type QueryExperienceArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryExperienceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ExperienceOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ExperienceFilter>
}

export type QueryProfileArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryProfileCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ProfileOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProfileFilter>
}

export type QueryProjectArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryProjectCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectFilter>
}

export type QuerySkillsArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QuerySkillsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<SkillsOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SkillsFilter>
}

export type QuerySocialMediaArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QuerySocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<SocialMediaOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<SocialMediaFilter>
}

export type QueryTechnologyArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryTechnologyCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<TechnologyOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TechnologyFilter>
}

export type ResourceLink = {
  __typename?: 'ResourceLink'
  sys: ResourceSys
}

export type ResourceSys = {
  __typename?: 'ResourceSys'
  linkType: Scalars['String']['output']
  type: Scalars['String']['output']
  urn: Scalars['String']['output']
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/skills) */
export type Skills = Entry & {
  __typename?: 'Skills'
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<SkillsLinkingCollections>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/skills) */
export type SkillsDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/skills) */
export type SkillsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/skills) */
export type SkillsTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type SkillsCollection = {
  __typename?: 'SkillsCollection'
  items: Array<Maybe<Skills>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type SkillsFilter = {
  AND?: InputMaybe<Array<InputMaybe<SkillsFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SkillsFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SkillsLinkingCollections = {
  __typename?: 'SkillsLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type SkillsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum SkillsOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/socialMedia) */
export type SocialMedia = Entry & {
  __typename?: 'SocialMedia'
  contentfulMetadata: ContentfulMetadata
  icon?: Maybe<Asset>
  link?: Maybe<Scalars['String']['output']>
  linkedFrom?: Maybe<SocialMediaLinkingCollections>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/socialMedia) */
export type SocialMediaIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/socialMedia) */
export type SocialMediaLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/socialMedia) */
export type SocialMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/socialMedia) */
export type SocialMediaTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type SocialMediaCollection = {
  __typename?: 'SocialMediaCollection'
  items: Array<Maybe<SocialMedia>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type SocialMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>
  OR?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>
  link?: InputMaybe<Scalars['String']['input']>
  link_contains?: InputMaybe<Scalars['String']['input']>
  link_exists?: InputMaybe<Scalars['Boolean']['input']>
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  link_not?: InputMaybe<Scalars['String']['input']>
  link_not_contains?: InputMaybe<Scalars['String']['input']>
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type SocialMediaLinkingCollections = {
  __typename?: 'SocialMediaLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type SocialMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum SocialMediaOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']['output']
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  publishedVersion?: Maybe<Scalars['Int']['output']>
  spaceId: Scalars['String']['output']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  id?: InputMaybe<Scalars['String']['input']>
  id_contains?: InputMaybe<Scalars['String']['input']>
  id_exists?: InputMaybe<Scalars['Boolean']['input']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_not?: InputMaybe<Scalars['String']['input']>
  id_not_contains?: InputMaybe<Scalars['String']['input']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedVersion?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/technology) */
export type Technology = Entry & {
  __typename?: 'Technology'
  contentfulMetadata: ContentfulMetadata
  icon?: Maybe<Asset>
  linkedFrom?: Maybe<TechnologyLinkingCollections>
  name?: Maybe<Scalars['String']['output']>
  sys: Sys
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/technology) */
export type TechnologyIconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/technology) */
export type TechnologyLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/f6zp47ogowku/content_types/technology) */
export type TechnologyNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type TechnologyCollection = {
  __typename?: 'TechnologyCollection'
  items: Array<Maybe<Technology>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type TechnologyFilter = {
  AND?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>
  OR?: InputMaybe<Array<InputMaybe<TechnologyFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  icon_exists?: InputMaybe<Scalars['Boolean']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type TechnologyLinkingCollections = {
  __typename?: 'TechnologyLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type TechnologyLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum TechnologyOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output']
}

export type GetExperiencesQueryVariables = Exact<{ [key: string]: never }>

export type GetExperiencesQuery = {
  __typename?: 'Query'
  experienceCollection?: {
    __typename?: 'ExperienceCollection'
    total: number
    skip: number
    limit: number
    items: Array<{
      __typename?: 'Experience'
      title?: string | null
      companyName?: string | null
      employmentType?: Array<string | null> | null
      location?: string | null
      locationType?: Array<string | null> | null
      currentWork?: boolean | null
      startDate?: any | null
      endDate?: any | null
      industry?: string | null
      description?: string | null
      companyImage?: {
        __typename?: 'Asset'
        title?: string | null
        description?: string | null
        contentType?: string | null
        fileName?: string | null
        size?: number | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null>
  } | null
  certificationCollection?: {
    __typename?: 'CertificationCollection'
    total: number
    items: Array<{
      __typename?: 'Certification'
      name?: string | null
      credentialUrl?: string | null
      picture?: { __typename?: 'Asset'; url?: string | null } | null
    } | null>
  } | null
}

export type GetHomePageInfoQueryVariables = Exact<{ [key: string]: never }>

export type GetHomePageInfoQuery = {
  __typename?: 'Query'
  profile?: {
    __typename?: 'Profile'
    username?: string | null
    englishLevel?: string | null
    picture?: { __typename?: 'Asset'; url?: string | null } | null
    heroHeadline?: { __typename?: 'ProfileHeroHeadline'; json: any } | null
    heroDescription?: {
      __typename?: 'ProfileHeroDescription'
      json: any
    } | null
    cv?: { __typename?: 'Asset'; url?: string | null } | null
    socialLinksCollection?: {
      __typename?: 'ProfileSocialLinksCollection'
      items: Array<
        | { __typename?: 'Certification' }
        | { __typename?: 'Experience' }
        | { __typename?: 'Profile' }
        | { __typename?: 'Project' }
        | { __typename?: 'Skills' }
        | {
            __typename?: 'SocialMedia'
            title?: string | null
            link?: string | null
            icon?: { __typename?: 'Asset'; url?: string | null } | null
          }
        | { __typename?: 'Technology' }
        | null
      >
    } | null
  } | null
  experienceCollection?: {
    __typename?: 'ExperienceCollection'
    total: number
    skip: number
    limit: number
    items: Array<{
      __typename?: 'Experience'
      title?: string | null
      companyName?: string | null
      employmentType?: Array<string | null> | null
      location?: string | null
      locationType?: Array<string | null> | null
      currentWork?: boolean | null
      startDate?: any | null
      endDate?: any | null
      industry?: string | null
      description?: string | null
      companyImage?: {
        __typename?: 'Asset'
        title?: string | null
        description?: string | null
        contentType?: string | null
        fileName?: string | null
        size?: number | null
        url?: string | null
        width?: number | null
        height?: number | null
      } | null
    } | null>
  } | null
  projectCollection?: {
    __typename?: 'ProjectCollection'
    total: number
    items: Array<{
      __typename?: 'Project'
      name?: string | null
      description?: string | null
      createdDate?: any | null
      featuredImage?: { __typename?: 'Asset'; url?: string | null } | null
      technologiesCollection?: {
        __typename?: 'ProjectTechnologiesCollection'
        items: Array<
          | { __typename?: 'Certification' }
          | { __typename?: 'Experience' }
          | { __typename?: 'Profile' }
          | { __typename?: 'Project' }
          | { __typename?: 'Skills' }
          | { __typename?: 'SocialMedia' }
          | {
              __typename?: 'Technology'
              name?: string | null
              icon?: { __typename?: 'Asset'; url?: string | null } | null
            }
          | null
        >
      } | null
    } | null>
  } | null
  certificationCollection?: {
    __typename?: 'CertificationCollection'
    total: number
    items: Array<{
      __typename?: 'Certification'
      name?: string | null
      credentialUrl?: string | null
      picture?: { __typename?: 'Asset'; url?: string | null } | null
    } | null>
  } | null
  skillsCollection?: {
    __typename?: 'SkillsCollection'
    items: Array<{
      __typename?: 'Skills'
      title?: string | null
      description?: string | null
    } | null>
  } | null
}

export type GetProjectByIdQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetProjectByIdQuery = {
  __typename?: 'Query'
  project?: {
    __typename?: 'Project'
    name?: string | null
    description?: string | null
    clientName?: string | null
    licenseName?: string | null
    createdDate?: any | null
    budget?: number | null
    timeSpend?: number | null
    prototypeUrl?: string | null
    featuredImage?: { __typename?: 'Asset'; url?: string | null } | null
    overview?: { __typename?: 'ProjectOverview'; json: any } | null
    designDescription?: {
      __typename?: 'ProjectDesignDescription'
      json: any
    } | null
    screenshotsCollection?: {
      __typename?: 'AssetCollection'
      items: Array<{
        __typename?: 'Asset'
        title?: string | null
        url?: string | null
      } | null>
    } | null
    technologiesCollection?: {
      __typename?: 'ProjectTechnologiesCollection'
      items: Array<
        | { __typename?: 'Certification' }
        | { __typename?: 'Experience' }
        | { __typename?: 'Profile' }
        | { __typename?: 'Project' }
        | { __typename?: 'Skills' }
        | { __typename?: 'SocialMedia' }
        | {
            __typename?: 'Technology'
            name?: string | null
            icon?: { __typename?: 'Asset'; url?: string | null } | null
          }
        | null
      >
    } | null
  } | null
}

export type GetProjectsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  limit: Scalars['Int']['input']
}>

export type GetProjectsQuery = {
  __typename?: 'Query'
  projectCollection?: {
    __typename?: 'ProjectCollection'
    items: Array<{
      __typename?: 'Project'
      name?: string | null
      description?: string | null
      technologiesCollection?: {
        __typename?: 'ProjectTechnologiesCollection'
        items: Array<
          | { __typename?: 'Certification' }
          | { __typename?: 'Experience' }
          | { __typename?: 'Profile' }
          | { __typename?: 'Project' }
          | { __typename?: 'Skills' }
          | { __typename?: 'SocialMedia' }
          | {
              __typename?: 'Technology'
              name?: string | null
              icon?: { __typename?: 'Asset'; url?: string | null } | null
            }
          | null
        >
      } | null
      featuredImage?: { __typename?: 'Asset'; url?: string | null } | null
    } | null>
  } | null
}

export const GetExperiencesDocument = gql`
  query GetExperiences {
    experienceCollection {
      total
      skip
      limit
      items {
        title
        companyName
        companyImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        employmentType
        location
        locationType
        currentWork
        startDate
        endDate
        industry
        description
      }
    }
    certificationCollection {
      total
      items {
        name
        credentialUrl
        picture {
          url
        }
      }
    }
  }
`

/**
 * __useGetExperiencesQuery__
 *
 * To run a query within a React component, call `useGetExperiencesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExperiencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExperiencesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExperiencesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetExperiencesQuery,
    GetExperiencesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetExperiencesQuery, GetExperiencesQueryVariables>(
    GetExperiencesDocument,
    options
  )
}
export function useGetExperiencesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetExperiencesQuery,
    GetExperiencesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetExperiencesQuery, GetExperiencesQueryVariables>(
    GetExperiencesDocument,
    options
  )
}
export function useGetExperiencesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetExperiencesQuery,
    GetExperiencesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetExperiencesQuery,
    GetExperiencesQueryVariables
  >(GetExperiencesDocument, options)
}
export type GetExperiencesQueryHookResult = ReturnType<
  typeof useGetExperiencesQuery
>
export type GetExperiencesLazyQueryHookResult = ReturnType<
  typeof useGetExperiencesLazyQuery
>
export type GetExperiencesSuspenseQueryHookResult = ReturnType<
  typeof useGetExperiencesSuspenseQuery
>
export type GetExperiencesQueryResult = Apollo.QueryResult<
  GetExperiencesQuery,
  GetExperiencesQueryVariables
>
export const GetHomePageInfoDocument = gql`
  query GetHomePageInfo {
    profile(id: "4BROQ6eCIHypEsqVkqWkE") {
      username
      englishLevel
      picture {
        url
      }
      heroHeadline {
        json
      }
      heroDescription {
        json
      }
      cv {
        url
      }
      socialLinksCollection {
        items {
          ... on SocialMedia {
            title
            link
            icon {
              url
            }
          }
        }
      }
    }
    experienceCollection {
      total
      skip
      limit
      items {
        title
        companyName
        companyImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        employmentType
        location
        locationType
        currentWork
        startDate
        endDate
        industry
        description
      }
    }
    projectCollection(limit: 3) {
      total
      items {
        name
        description
        createdDate
        featuredImage {
          url
        }
        technologiesCollection {
          items {
            ... on Technology {
              name
              icon {
                url
              }
            }
          }
        }
      }
    }
    certificationCollection(limit: 6) {
      total
      items {
        name
        credentialUrl
        picture {
          url
        }
      }
    }
    skillsCollection(limit: 12) {
      items {
        title
        description
      }
    }
  }
`

/**
 * __useGetHomePageInfoQuery__
 *
 * To run a query within a React component, call `useGetHomePageInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetHomePageInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetHomePageInfoQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetHomePageInfoQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetHomePageInfoQuery,
    GetHomePageInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetHomePageInfoQuery, GetHomePageInfoQueryVariables>(
    GetHomePageInfoDocument,
    options
  )
}
export function useGetHomePageInfoLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetHomePageInfoQuery,
    GetHomePageInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetHomePageInfoQuery,
    GetHomePageInfoQueryVariables
  >(GetHomePageInfoDocument, options)
}
export function useGetHomePageInfoSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetHomePageInfoQuery,
    GetHomePageInfoQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetHomePageInfoQuery,
    GetHomePageInfoQueryVariables
  >(GetHomePageInfoDocument, options)
}
export type GetHomePageInfoQueryHookResult = ReturnType<
  typeof useGetHomePageInfoQuery
>
export type GetHomePageInfoLazyQueryHookResult = ReturnType<
  typeof useGetHomePageInfoLazyQuery
>
export type GetHomePageInfoSuspenseQueryHookResult = ReturnType<
  typeof useGetHomePageInfoSuspenseQuery
>
export type GetHomePageInfoQueryResult = Apollo.QueryResult<
  GetHomePageInfoQuery,
  GetHomePageInfoQueryVariables
>
export const GetProjectByIdDocument = gql`
  query GetProjectById($id: String!) {
    project(id: $id) {
      name
      description
      clientName
      licenseName
      featuredImage {
        url
      }
      createdDate
      budget
      timeSpend
      overview {
        json
      }
      designDescription {
        json
      }
      prototypeUrl
      screenshotsCollection {
        items {
          title
          url
        }
      }
      technologiesCollection {
        items {
          ... on Technology {
            name
            icon {
              url
            }
          }
        }
      }
    }
  }
`

/**
 * __useGetProjectByIdQuery__
 *
 * To run a query within a React component, call `useGetProjectByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProjectByIdQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(
    GetProjectByIdDocument,
    options
  )
}
export function useGetProjectByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectByIdQuery, GetProjectByIdQueryVariables>(
    GetProjectByIdDocument,
    options
  )
}
export function useGetProjectByIdSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetProjectByIdQuery,
    GetProjectByIdQueryVariables
  >(GetProjectByIdDocument, options)
}
export type GetProjectByIdQueryHookResult = ReturnType<
  typeof useGetProjectByIdQuery
>
export type GetProjectByIdLazyQueryHookResult = ReturnType<
  typeof useGetProjectByIdLazyQuery
>
export type GetProjectByIdSuspenseQueryHookResult = ReturnType<
  typeof useGetProjectByIdSuspenseQuery
>
export type GetProjectByIdQueryResult = Apollo.QueryResult<
  GetProjectByIdQuery,
  GetProjectByIdQueryVariables
>
export const GetProjectsDocument = gql`
  query GetProjects($skip: Int, $limit: Int!) {
    projectCollection(skip: $skip, limit: $limit) {
      items {
        name
        description
        technologiesCollection {
          items {
            ... on Technology {
              name
              icon {
                url
              }
            }
          }
        }
        featuredImage {
          url
        }
      }
    }
  }
`

/**
 * __useGetProjectsQuery__
 *
 * To run a query within a React component, call `useGetProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProjectsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetProjectsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProjectsQuery, GetProjectsQueryVariables>(
    GetProjectsDocument,
    options
  )
}
export function useGetProjectsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetProjectsQuery, GetProjectsQueryVariables>(
    GetProjectsDocument,
    options
  )
}
export function useGetProjectsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProjectsQuery,
    GetProjectsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetProjectsQuery, GetProjectsQueryVariables>(
    GetProjectsDocument,
    options
  )
}
export type GetProjectsQueryHookResult = ReturnType<typeof useGetProjectsQuery>
export type GetProjectsLazyQueryHookResult = ReturnType<
  typeof useGetProjectsLazyQuery
>
export type GetProjectsSuspenseQueryHookResult = ReturnType<
  typeof useGetProjectsSuspenseQuery
>
export type GetProjectsQueryResult = Apollo.QueryResult<
  GetProjectsQuery,
  GetProjectsQueryVariables
>
