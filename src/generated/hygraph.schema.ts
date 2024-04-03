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
  Date: { input: any; output: any }
  DateTime: { input: any; output: any }
  Hex: { input: any; output: any }
  Json: { input: any; output: any }
  Long: { input: any; output: any }
  RGBAHue: { input: any; output: any }
  RGBATransparency: { input: any; output: any }
  RichTextAST: { input: any; output: any }
}

export type Aggregate = {
  __typename?: 'Aggregate'
  count: Scalars['Int']['output']
}

/** Asset system model */
export type Asset = Entity &
  Node & {
    __typename?: 'Asset'
    companyImageWork: Array<Work>
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<Asset>
    /** The file name */
    fileName: Scalars['String']['output']
    /** The file handle */
    handle: Scalars['String']['output']
    /** The height of the file */
    height?: Maybe<Scalars['Float']['output']>
    /** List of Asset versions */
    history: Array<Version>
    iconTechnology: Array<Technology>
    /** The unique identifier */
    id: Scalars['ID']['output']
    imageCertification: Array<Certification>
    imageProject: Array<Project>
    /** System Locale field */
    locale: Locale
    /** Get the other localizations for this document */
    localizations: Array<Asset>
    /** The mime type of the file */
    mimeType?: Maybe<Scalars['String']['output']>
    organizationImageCertification: Array<Certification>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** The file size */
    size?: Maybe<Scalars['Float']['output']>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    /** Returns information you need to upload the asset. The type of upload is dependant on what you pass into asset creations as upload type. */
    upload?: Maybe<AssetUpload>
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars['String']['output']
    /** The file width */
    width?: Maybe<Scalars['Float']['output']>
  }

/** Asset system model */
export type AssetCompanyImageWorkArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<WorkOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkWhereInput>
}

/** Asset system model */
export type AssetCreatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Asset system model */
export type AssetHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

/** Asset system model */
export type AssetIconTechnologyArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<TechnologyOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TechnologyWhereInput>
}

/** Asset system model */
export type AssetImageCertificationArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CertificationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CertificationWhereInput>
}

/** Asset system model */
export type AssetImageProjectArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ProjectOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectWhereInput>
}

/** Asset system model */
export type AssetLocalizationsArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  locales?: Array<Locale>
}

/** Asset system model */
export type AssetOrganizationImageCertificationArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<CertificationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CertificationWhereInput>
}

/** Asset system model */
export type AssetPublishedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Asset system model */
export type AssetUpdatedAtArgs = {
  variation?: SystemDateTimeFieldVariation
}

/** Asset system model */
export type AssetUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Asset system model */
export type AssetUrlArgs = {
  transformation?: InputMaybe<AssetTransformationInput>
}

export type AssetConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: AssetWhereUniqueInput
}

/** A connection to a list of items. */
export type AssetConnection = {
  __typename?: 'AssetConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<AssetEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type AssetCreateInput = {
  companyImageWork?: InputMaybe<WorkCreateManyInlineInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName?: InputMaybe<Scalars['String']['input']>
  iconTechnology?: InputMaybe<TechnologyCreateManyInlineInput>
  imageCertification?: InputMaybe<CertificationCreateManyInlineInput>
  imageProject?: InputMaybe<ProjectCreateManyInlineInput>
  /** Inline mutations for managing document localizations excluding the default locale */
  localizations?: InputMaybe<AssetCreateLocalizationsInput>
  organizationImageCertification?: InputMaybe<CertificationCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetCreateLocalizationDataInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  fileName?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetCreateLocalizationInput = {
  /** Localization input */
  data: AssetCreateLocalizationDataInput
  locale: Locale
}

export type AssetCreateLocalizationsInput = {
  /** Create localizations for the newly-created document */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
}

export type AssetCreateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Create and connect multiple existing Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
}

export type AssetCreateOneInlineInput = {
  /** Connect one existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
}

/** An edge in a connection. */
export type AssetEdge = {
  __typename?: 'AssetEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Asset
}

/** Identifies documents */
export type AssetManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  companyImageWork_every?: InputMaybe<WorkWhereInput>
  companyImageWork_none?: InputMaybe<WorkWhereInput>
  companyImageWork_some?: InputMaybe<WorkWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  iconTechnology_every?: InputMaybe<TechnologyWhereInput>
  iconTechnology_none?: InputMaybe<TechnologyWhereInput>
  iconTechnology_some?: InputMaybe<TechnologyWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  imageCertification_every?: InputMaybe<CertificationWhereInput>
  imageCertification_none?: InputMaybe<CertificationWhereInput>
  imageCertification_some?: InputMaybe<CertificationWhereInput>
  imageProject_every?: InputMaybe<ProjectWhereInput>
  imageProject_none?: InputMaybe<ProjectWhereInput>
  imageProject_some?: InputMaybe<ProjectWhereInput>
  organizationImageCertification_every?: InputMaybe<CertificationWhereInput>
  organizationImageCertification_none?: InputMaybe<CertificationWhereInput>
  organizationImageCertification_some?: InputMaybe<CertificationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  upload?: InputMaybe<AssetUploadWhereInput>
}

export enum AssetOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** Identifies documents */
export type AssetSingleRelationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetSingleRelationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetSingleRelationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetSingleRelationWhereInput>>
  upload?: InputMaybe<AssetUploadWhereInput>
}

/** Transformations for Assets */
export type AssetTransformationInput = {
  document?: InputMaybe<DocumentTransformationInput>
  image?: InputMaybe<ImageTransformationInput>
  /** Pass true if you want to validate the passed transformation parameters */
  validateOptions?: InputMaybe<Scalars['Boolean']['input']>
}

export type AssetUpdateInput = {
  companyImageWork?: InputMaybe<WorkUpdateManyInlineInput>
  fileName?: InputMaybe<Scalars['String']['input']>
  iconTechnology?: InputMaybe<TechnologyUpdateManyInlineInput>
  imageCertification?: InputMaybe<CertificationUpdateManyInlineInput>
  imageProject?: InputMaybe<ProjectUpdateManyInlineInput>
  /** Manage document localizations */
  localizations?: InputMaybe<AssetUpdateLocalizationsInput>
  organizationImageCertification?: InputMaybe<CertificationUpdateManyInlineInput>
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetUpdateLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetUpdateLocalizationInput = {
  data: AssetUpdateLocalizationDataInput
  locale: Locale
}

export type AssetUpdateLocalizationsInput = {
  /** Localizations to create */
  create?: InputMaybe<Array<AssetCreateLocalizationInput>>
  /** Localizations to delete */
  delete?: InputMaybe<Array<Locale>>
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateLocalizationInput>>
  upsert?: InputMaybe<Array<AssetUpsertLocalizationInput>>
}

export type AssetUpdateManyInlineInput = {
  /** Connect multiple existing Asset documents */
  connect?: InputMaybe<Array<AssetConnectInput>>
  /** Create and connect multiple Asset documents */
  create?: InputMaybe<Array<AssetCreateInput>>
  /** Delete multiple Asset documents */
  delete?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Disconnect multiple Asset documents */
  disconnect?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Asset documents */
  set?: InputMaybe<Array<AssetWhereUniqueInput>>
  /** Update multiple Asset documents */
  update?: InputMaybe<Array<AssetUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Asset documents */
  upsert?: InputMaybe<Array<AssetUpsertWithNestedWhereUniqueInput>>
}

export type AssetUpdateManyInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  /** Optional updates to localizations */
  localizations?: InputMaybe<AssetUpdateManyLocalizationsInput>
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetUpdateManyLocalizationDataInput = {
  fileName?: InputMaybe<Scalars['String']['input']>
  /** Use this to define if its a reupload for the asset */
  reUpload?: InputMaybe<Scalars['Boolean']['input']>
  /** Optionally the system can upload a file for you, for that you need to provide a publicly accessible url */
  uploadUrl?: InputMaybe<Scalars['String']['input']>
}

export type AssetUpdateManyLocalizationInput = {
  data: AssetUpdateManyLocalizationDataInput
  locale: Locale
}

export type AssetUpdateManyLocalizationsInput = {
  /** Localizations to update */
  update?: InputMaybe<Array<AssetUpdateManyLocalizationInput>>
}

export type AssetUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: AssetUpdateManyInput
  /** Document search */
  where: AssetWhereInput
}

export type AssetUpdateOneInlineInput = {
  /** Connect existing Asset document */
  connect?: InputMaybe<AssetWhereUniqueInput>
  /** Create and connect one Asset document */
  create?: InputMaybe<AssetCreateInput>
  /** Delete currently connected Asset document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Asset document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Asset document */
  update?: InputMaybe<AssetUpdateWithNestedWhereUniqueInput>
  /** Upsert single Asset document */
  upsert?: InputMaybe<AssetUpsertWithNestedWhereUniqueInput>
}

export type AssetUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: AssetUpdateInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** Asset Upload */
export type AssetUpload = {
  __typename?: 'AssetUpload'
  /** Asset Upload Error */
  error?: Maybe<AssetUploadError>
  /** Expiry Timestamp */
  expiresAt?: Maybe<Scalars['DateTime']['output']>
  /** Asset Request Data for upload */
  requestPostData?: Maybe<AssetUploadRequestPostData>
  /** Asset Request Data for upload */
  status?: Maybe<AssetUploadStatus>
}

/** Represents asset upload error */
export type AssetUploadError = {
  __typename?: 'AssetUploadError'
  code: Scalars['String']['output']
  message: Scalars['String']['output']
}

/** Asset Upload Request Post Data */
export type AssetUploadRequestPostData = {
  __typename?: 'AssetUploadRequestPostData'
  /** The algorithm to use in the form field. This value should be passed in the `X-Amz-Algorithm` form field. */
  algorithm: Scalars['String']['output']
  /** The credential to use in the form field. This value should be passed in the `X-Amz-Credential` form field. */
  credential: Scalars['String']['output']
  /** The date the request was signed, formatted as YYYYMMDDTHHMMSSZ. This value should be passed in the `X-Amz-Date` header. */
  date: Scalars['String']['output']
  /** The key to use in the form field. This value should be passed in the `Key` form field. */
  key: Scalars['String']['output']
  /** The policy to use in the form field. This value should be passed in the `Policy` form field. */
  policy: Scalars['String']['output']
  /** The security token to use in the form field. This field is optional only pass it if its not null. This value should be passed in the `X-Amz-Security-Token` form field if not null. */
  securityToken?: Maybe<Scalars['String']['output']>
  /** The signature to use in the form field. This value should be passed in the `X-Amz-Signature` form field. */
  signature: Scalars['String']['output']
  /** The URL to which the file should be uploaded with a POST request. */
  url: Scalars['String']['output']
}

/** System Asset Upload Status */
export enum AssetUploadStatus {
  AssetCreatePending = 'ASSET_CREATE_PENDING',
  AssetErrorUpload = 'ASSET_ERROR_UPLOAD',
  AssetUpdatePending = 'ASSET_UPDATE_PENDING',
  AssetUploadComplete = 'ASSET_UPLOAD_COMPLETE'
}

/** Identifies documents */
export type AssetUploadWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<AssetUploadStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
}

/** Identifies documents */
export type AssetUploadWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetUploadWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetUploadWhereInput>>
  expiresAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  expiresAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  expiresAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  expiresAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  expiresAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  expiresAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  expiresAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  expiresAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<AssetUploadStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<AssetUploadStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<AssetUploadStatus>>>
}

export type AssetUpsertInput = {
  /** Create document if it didn't exist */
  create: AssetCreateInput
  /** Update document if it exists */
  update: AssetUpdateInput
}

export type AssetUpsertLocalizationInput = {
  create: AssetCreateLocalizationDataInput
  locale: Locale
  update: AssetUpdateLocalizationDataInput
}

export type AssetUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: AssetUpsertInput
  /** Unique document search */
  where: AssetWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type AssetWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type AssetWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  companyImageWork_every?: InputMaybe<WorkWhereInput>
  companyImageWork_none?: InputMaybe<WorkWhereInput>
  companyImageWork_some?: InputMaybe<WorkWhereInput>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<AssetWhereStageInput>
  documentInStages_none?: InputMaybe<AssetWhereStageInput>
  documentInStages_some?: InputMaybe<AssetWhereStageInput>
  fileName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  fileName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  fileName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  fileName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  fileName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  fileName_starts_with?: InputMaybe<Scalars['String']['input']>
  handle?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  handle_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  handle_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  handle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  handle_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  handle_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  handle_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  handle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  handle_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  handle_starts_with?: InputMaybe<Scalars['String']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  height_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  height_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  height_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  height_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  height_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  iconTechnology_every?: InputMaybe<TechnologyWhereInput>
  iconTechnology_none?: InputMaybe<TechnologyWhereInput>
  iconTechnology_some?: InputMaybe<TechnologyWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  imageCertification_every?: InputMaybe<CertificationWhereInput>
  imageCertification_none?: InputMaybe<CertificationWhereInput>
  imageCertification_some?: InputMaybe<CertificationWhereInput>
  imageProject_every?: InputMaybe<ProjectWhereInput>
  imageProject_none?: InputMaybe<ProjectWhereInput>
  imageProject_some?: InputMaybe<ProjectWhereInput>
  mimeType?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  mimeType_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  mimeType_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  mimeType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  mimeType_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  mimeType_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  mimeType_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  mimeType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  mimeType_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  mimeType_starts_with?: InputMaybe<Scalars['String']['input']>
  organizationImageCertification_every?: InputMaybe<CertificationWhereInput>
  organizationImageCertification_none?: InputMaybe<CertificationWhereInput>
  organizationImageCertification_some?: InputMaybe<CertificationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  size?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  size_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  size_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  size_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  size_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  size_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  upload?: InputMaybe<AssetUploadWhereInput>
  width?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than the given value. */
  width_gt?: InputMaybe<Scalars['Float']['input']>
  /** All values greater than or equal the given value. */
  width_gte?: InputMaybe<Scalars['Float']['input']>
  /** All values that are contained in given list. */
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  /** All values less than the given value. */
  width_lt?: InputMaybe<Scalars['Float']['input']>
  /** All values less than or equal the given value. */
  width_lte?: InputMaybe<Scalars['Float']['input']>
  /** Any other value that exists and is not equal to the given value. */
  width_not?: InputMaybe<Scalars['Float']['input']>
  /** All values that are not contained in given list. */
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type AssetWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<AssetWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<AssetWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<AssetWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Asset record uniquely */
export type AssetWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type BatchPayload = {
  __typename?: 'BatchPayload'
  /** The number of nodes that have been affected by the Batch operation. */
  count: Scalars['Long']['output']
}

export type Certification = Entity &
  Node & {
    __typename?: 'Certification'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    date: Scalars['Date']['output']
    /** Get the document in other stages */
    documentInStages: Array<Certification>
    /** List of Certification versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    image: Asset
    name: Scalars['String']['output']
    organizationImage: Asset
    organizationName: Scalars['String']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    slug: Scalars['String']['output']
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    url: Scalars['String']['output']
  }

export type CertificationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type CertificationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type CertificationHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type CertificationImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type CertificationOrganizationImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type CertificationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type CertificationScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type CertificationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type CertificationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: CertificationWhereUniqueInput
}

/** A connection to a list of items. */
export type CertificationConnection = {
  __typename?: 'CertificationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<CertificationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type CertificationCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  date: Scalars['Date']['input']
  image: AssetCreateOneInlineInput
  name: Scalars['String']['input']
  organizationImage: AssetCreateOneInlineInput
  organizationName: Scalars['String']['input']
  slug: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  url: Scalars['String']['input']
}

export type CertificationCreateManyInlineInput = {
  /** Connect multiple existing Certification documents */
  connect?: InputMaybe<Array<CertificationWhereUniqueInput>>
  /** Create and connect multiple existing Certification documents */
  create?: InputMaybe<Array<CertificationCreateInput>>
}

export type CertificationCreateOneInlineInput = {
  /** Connect one existing Certification document */
  connect?: InputMaybe<CertificationWhereUniqueInput>
  /** Create and connect one Certification document */
  create?: InputMaybe<CertificationCreateInput>
}

/** An edge in a connection. */
export type CertificationEdge = {
  __typename?: 'CertificationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Certification
}

/** Identifies documents */
export type CertificationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  documentInStages_every?: InputMaybe<CertificationWhereStageInput>
  documentInStages_none?: InputMaybe<CertificationWhereStageInput>
  documentInStages_some?: InputMaybe<CertificationWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  organizationImage?: InputMaybe<AssetWhereInput>
  organizationName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  organizationName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  organizationName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  organizationName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  organizationName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  organizationName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  organizationName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  organizationName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  organizationName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  organizationName_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum CertificationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OrganizationNameAsc = 'organizationName_ASC',
  OrganizationNameDesc = 'organizationName_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type CertificationUpdateInput = {
  date?: InputMaybe<Scalars['Date']['input']>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  name?: InputMaybe<Scalars['String']['input']>
  organizationImage?: InputMaybe<AssetUpdateOneInlineInput>
  organizationName?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type CertificationUpdateManyInlineInput = {
  /** Connect multiple existing Certification documents */
  connect?: InputMaybe<Array<CertificationConnectInput>>
  /** Create and connect multiple Certification documents */
  create?: InputMaybe<Array<CertificationCreateInput>>
  /** Delete multiple Certification documents */
  delete?: InputMaybe<Array<CertificationWhereUniqueInput>>
  /** Disconnect multiple Certification documents */
  disconnect?: InputMaybe<Array<CertificationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Certification documents */
  set?: InputMaybe<Array<CertificationWhereUniqueInput>>
  /** Update multiple Certification documents */
  update?: InputMaybe<Array<CertificationUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Certification documents */
  upsert?: InputMaybe<Array<CertificationUpsertWithNestedWhereUniqueInput>>
}

export type CertificationUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  organizationName?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type CertificationUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: CertificationUpdateManyInput
  /** Document search */
  where: CertificationWhereInput
}

export type CertificationUpdateOneInlineInput = {
  /** Connect existing Certification document */
  connect?: InputMaybe<CertificationWhereUniqueInput>
  /** Create and connect one Certification document */
  create?: InputMaybe<CertificationCreateInput>
  /** Delete currently connected Certification document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Certification document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Certification document */
  update?: InputMaybe<CertificationUpdateWithNestedWhereUniqueInput>
  /** Upsert single Certification document */
  upsert?: InputMaybe<CertificationUpsertWithNestedWhereUniqueInput>
}

export type CertificationUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: CertificationUpdateInput
  /** Unique document search */
  where: CertificationWhereUniqueInput
}

export type CertificationUpsertInput = {
  /** Create document if it didn't exist */
  create: CertificationCreateInput
  /** Update document if it exists */
  update: CertificationUpdateInput
}

export type CertificationUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: CertificationUpsertInput
  /** Unique document search */
  where: CertificationWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type CertificationWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type CertificationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  documentInStages_every?: InputMaybe<CertificationWhereStageInput>
  documentInStages_none?: InputMaybe<CertificationWhereStageInput>
  documentInStages_some?: InputMaybe<CertificationWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  organizationImage?: InputMaybe<AssetWhereInput>
  organizationName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  organizationName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  organizationName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  organizationName_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** Any other value that exists and is not equal to the given value. */
  organizationName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  organizationName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  organizationName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  organizationName_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  organizationName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  organizationName_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type CertificationWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<CertificationWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<CertificationWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<CertificationWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<CertificationWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Certification record uniquely */
export type CertificationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

/** Representing a color value comprising of HEX, RGBA and css color values */
export type Color = {
  __typename?: 'Color'
  css: Scalars['String']['output']
  hex: Scalars['Hex']['output']
  rgba: Rgba
}

/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export type ColorInput = {
  hex?: InputMaybe<Scalars['Hex']['input']>
  rgba?: InputMaybe<RgbaInput>
}

export type ConnectPositionInput = {
  /** Connect document after specified document */
  after?: InputMaybe<Scalars['ID']['input']>
  /** Connect document before specified document */
  before?: InputMaybe<Scalars['ID']['input']>
  /** Connect document at last position */
  end?: InputMaybe<Scalars['Boolean']['input']>
  /** Connect document at first position */
  start?: InputMaybe<Scalars['Boolean']['input']>
}

export enum DocumentFileTypes {
  /** Automatically selects the best format for the image based on the browser's capabilities. */
  AutoImage = 'autoImage',
  Avif = 'avif',
  Bmp = 'bmp',
  Gif = 'gif',
  Heic = 'heic',
  Jpg = 'jpg',
  Png = 'png',
  Svg = 'svg',
  Tiff = 'tiff',
  Webp = 'webp'
}

export type DocumentOutputInput = {
  /**
   * Transforms a document into a desired file type.
   * See this matrix for format support:
   *
   * JPG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * PNG:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * SVG:	autoImage, bmp, gif, jpg, png, webp, tiff
   * WEBP:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * GIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * TIFF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * AVIF:	autoImage, bmp, gif, jpg, png, webp, tiff, svg
   * PDF: 	autoImage, gif, jpg, png, webp, tiff
   *
   */
  format?: InputMaybe<DocumentFileTypes>
}

/** Transformations for Documents */
export type DocumentTransformationInput = {
  /** Changes the output for the file. */
  output?: InputMaybe<DocumentOutputInput>
}

export type DocumentVersion = {
  __typename?: 'DocumentVersion'
  createdAt: Scalars['DateTime']['output']
  data?: Maybe<Scalars['Json']['output']>
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export enum EmploymentModes {
  Hybrid = 'hybrid',
  OnSite = 'on_site',
  Remote = 'remote'
}

export enum EmploymentTypes {
  Apprenticeship = 'apprenticeship',
  Contract = 'contract',
  Freelance = 'freelance',
  FullTime = 'full_time',
  Internship = 'internship',
  PartTime = 'part_time',
  Seasonal = 'seasonal',
  SelfEmployed = 'self_employed'
}

/** An object with an ID */
export type Entity = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

/** This enumeration holds all typenames that implement the Entity interface. Components and models implement the Entity interface. */
export enum EntityTypeName {
  /** Asset system model */
  Asset = 'Asset',
  Certification = 'Certification',
  Project = 'Project',
  /** Scheduled Operation system model */
  ScheduledOperation = 'ScheduledOperation',
  /** Scheduled Release system model */
  ScheduledRelease = 'ScheduledRelease',
  Technology = 'Technology',
  /** User system model */
  User = 'User',
  Work = 'Work'
}

/** Allows to specify input to query models and components directly */
export type EntityWhereInput = {
  /** The ID of an object */
  id: Scalars['ID']['input']
  locale?: InputMaybe<Locale>
  stage: Stage
  /** The Type name of an object */
  typename: EntityTypeName
}

export type ImageBlurInput = {
  /** The amount of blurring to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input']
}

/** Adds a border to the image. */
export type ImageBorderInput = {
  /** The background color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  background: Scalars['String']['input']
  /** The color of the border. The value must be a valid hex color code. Or one of the supported color names. */
  color: Scalars['String']['input']
  /** The width of the border in pixels. The value must be an integer from 1 to 1000. */
  width: Scalars['Int']['input']
}

export type ImageCompressInput = {
  /** Preserves the metadata of the image. */
  metadata: Scalars['Boolean']['input']
}

/**
 * Crops the image to the specified dimensions.
 * The starting points for X and Y coordinates are [0,0], aligning with the top-left corner of the image.
 * The width and height parameters determine the size in pixels of the cropping rectangle.
 * The output will include only the portion of the image within the designated crop area.
 */
export type ImageCropInput = {
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height: Scalars['Int']['input']
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width: Scalars['Int']['input']
  /** The x coordinate of the image. The value must be an integer from 0 to 10000. */
  x: Scalars['Int']['input']
  /** The y coordinate of the image. The value must be an integer from 0 to 10000. */
  y: Scalars['Int']['input']
}

export enum ImageFit {
  /** Resizes the image to fit within the specified parameters without distorting, cropping, or changing the aspect ratio. */
  Clip = 'clip',
  /** Resizes the image to fit the specified parameters exactly by removing any parts of the image that don't fit within the boundaries. */
  Crop = 'crop',
  /** Resizes the image to fit within the parameters, but as opposed to 'fit:clip' will not scale the image if the image is smaller than the output size. */
  Max = 'max',
  /** Resizes the image to fit the specified parameters exactly by scaling the image to the desired size. The aspect ratio of the image is not respected and the image can be distorted using this method. */
  Scale = 'scale'
}

export type ImageQualityInput = {
  /** The quality of the image. The value must be an integer from 1 to 100. */
  value: Scalars['Int']['input']
}

export type ImageResizeInput = {
  /** The default value for the fit parameter is fit:clip. */
  fit?: InputMaybe<ImageFit>
  /** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  height?: InputMaybe<Scalars['Int']['input']>
  /** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
  width?: InputMaybe<Scalars['Int']['input']>
}

export type ImageSharpenInput = {
  /** The amount of sharpening to apply to the image. The value must be an integer from 1 to 20. */
  amount: Scalars['Int']['input']
}

/** Transformations for Images */
export type ImageTransformationInput = {
  /** Blurs the image. */
  blur?: InputMaybe<ImageBlurInput>
  /** Adds a border to the image. */
  border?: InputMaybe<ImageBorderInput>
  /** Compresses the image. */
  compress?: InputMaybe<ImageCompressInput>
  /** Crops the image to the specified dimensions. */
  crop?: InputMaybe<ImageCropInput>
  /**
   * Changes the quality of the image. The value must be an integer from 1 to 100.
   * Only supported for the following formats jpeg, jpg, webp, gif, heif, tiff, avif.
   */
  quality?: InputMaybe<ImageQualityInput>
  /** Resizes the image */
  resize?: InputMaybe<ImageResizeInput>
  /** Sharpens the image. */
  sharpen?: InputMaybe<ImageSharpenInput>
}

/** Locale system enumeration */
export enum Locale {
  /** System locale */
  En = 'en'
}

/** Representing a geolocation point with latitude and longitude */
export type Location = {
  __typename?: 'Location'
  distance: Scalars['Float']['output']
  latitude: Scalars['Float']['output']
  longitude: Scalars['Float']['output']
}

/** Representing a geolocation point with latitude and longitude */
export type LocationDistanceArgs = {
  from: LocationInput
}

/** Input for a geolocation point with latitude and longitude */
export type LocationInput = {
  latitude: Scalars['Float']['input']
  longitude: Scalars['Float']['input']
}

export type Mutation = {
  __typename?: 'Mutation'
  /** Create an asset. Use the returned info to finish the creation process by uploading the asset. */
  createAsset?: Maybe<Asset>
  /** Create one certification */
  createCertification?: Maybe<Certification>
  /** Create one project */
  createProject?: Maybe<Project>
  /** Create one scheduledRelease */
  createScheduledRelease?: Maybe<ScheduledRelease>
  /** Create one technology */
  createTechnology?: Maybe<Technology>
  /** Create one work */
  createWork?: Maybe<Work>
  /** Delete one asset from _all_ existing stages. Returns deleted document. */
  deleteAsset?: Maybe<Asset>
  /** Delete one certification from _all_ existing stages. Returns deleted document. */
  deleteCertification?: Maybe<Certification>
  /**
   * Delete many Asset documents
   * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
   */
  deleteManyAssets: BatchPayload
  /** Delete many Asset documents, return deleted documents */
  deleteManyAssetsConnection: AssetConnection
  /**
   * Delete many Certification documents
   * @deprecated Please use the new paginated many mutation (deleteManyCertificationsConnection)
   */
  deleteManyCertifications: BatchPayload
  /** Delete many Certification documents, return deleted documents */
  deleteManyCertificationsConnection: CertificationConnection
  /**
   * Delete many Project documents
   * @deprecated Please use the new paginated many mutation (deleteManyProjectsConnection)
   */
  deleteManyProjects: BatchPayload
  /** Delete many Project documents, return deleted documents */
  deleteManyProjectsConnection: ProjectConnection
  /**
   * Delete many Technology documents
   * @deprecated Please use the new paginated many mutation (deleteManyTechnologiesConnection)
   */
  deleteManyTechnologies: BatchPayload
  /** Delete many Technology documents, return deleted documents */
  deleteManyTechnologiesConnection: TechnologyConnection
  /**
   * Delete many Work documents
   * @deprecated Please use the new paginated many mutation (deleteManyWorksConnection)
   */
  deleteManyWorks: BatchPayload
  /** Delete many Work documents, return deleted documents */
  deleteManyWorksConnection: WorkConnection
  /** Delete one project from _all_ existing stages. Returns deleted document. */
  deleteProject?: Maybe<Project>
  /** Delete and return scheduled operation */
  deleteScheduledOperation?: Maybe<ScheduledOperation>
  /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
  deleteScheduledRelease?: Maybe<ScheduledRelease>
  /** Delete one technology from _all_ existing stages. Returns deleted document. */
  deleteTechnology?: Maybe<Technology>
  /** Delete one work from _all_ existing stages. Returns deleted document. */
  deleteWork?: Maybe<Work>
  /** Publish one asset */
  publishAsset?: Maybe<Asset>
  /** Publish one certification */
  publishCertification?: Maybe<Certification>
  /**
   * Publish many Asset documents
   * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
   */
  publishManyAssets: BatchPayload
  /** Publish many Asset documents */
  publishManyAssetsConnection: AssetConnection
  /**
   * Publish many Certification documents
   * @deprecated Please use the new paginated many mutation (publishManyCertificationsConnection)
   */
  publishManyCertifications: BatchPayload
  /** Publish many Certification documents */
  publishManyCertificationsConnection: CertificationConnection
  /**
   * Publish many Project documents
   * @deprecated Please use the new paginated many mutation (publishManyProjectsConnection)
   */
  publishManyProjects: BatchPayload
  /** Publish many Project documents */
  publishManyProjectsConnection: ProjectConnection
  /**
   * Publish many Technology documents
   * @deprecated Please use the new paginated many mutation (publishManyTechnologiesConnection)
   */
  publishManyTechnologies: BatchPayload
  /** Publish many Technology documents */
  publishManyTechnologiesConnection: TechnologyConnection
  /**
   * Publish many Work documents
   * @deprecated Please use the new paginated many mutation (publishManyWorksConnection)
   */
  publishManyWorks: BatchPayload
  /** Publish many Work documents */
  publishManyWorksConnection: WorkConnection
  /** Publish one project */
  publishProject?: Maybe<Project>
  /** Publish one technology */
  publishTechnology?: Maybe<Technology>
  /** Publish one work */
  publishWork?: Maybe<Work>
  /** Schedule to publish one asset */
  schedulePublishAsset?: Maybe<Asset>
  /** Schedule to publish one certification */
  schedulePublishCertification?: Maybe<Certification>
  /** Schedule to publish one project */
  schedulePublishProject?: Maybe<Project>
  /** Schedule to publish one technology */
  schedulePublishTechnology?: Maybe<Technology>
  /** Schedule to publish one work */
  schedulePublishWork?: Maybe<Work>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishAsset?: Maybe<Asset>
  /** Unpublish one certification from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishCertification?: Maybe<Certification>
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishProject?: Maybe<Project>
  /** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishTechnology?: Maybe<Technology>
  /** Unpublish one work from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  scheduleUnpublishWork?: Maybe<Work>
  /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishAsset?: Maybe<Asset>
  /** Unpublish one certification from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishCertification?: Maybe<Certification>
  /**
   * Unpublish many Asset documents
   * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
   */
  unpublishManyAssets: BatchPayload
  /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyAssetsConnection: AssetConnection
  /**
   * Unpublish many Certification documents
   * @deprecated Please use the new paginated many mutation (unpublishManyCertificationsConnection)
   */
  unpublishManyCertifications: BatchPayload
  /** Find many Certification documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyCertificationsConnection: CertificationConnection
  /**
   * Unpublish many Project documents
   * @deprecated Please use the new paginated many mutation (unpublishManyProjectsConnection)
   */
  unpublishManyProjects: BatchPayload
  /** Find many Project documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyProjectsConnection: ProjectConnection
  /**
   * Unpublish many Technology documents
   * @deprecated Please use the new paginated many mutation (unpublishManyTechnologiesConnection)
   */
  unpublishManyTechnologies: BatchPayload
  /** Find many Technology documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyTechnologiesConnection: TechnologyConnection
  /**
   * Unpublish many Work documents
   * @deprecated Please use the new paginated many mutation (unpublishManyWorksConnection)
   */
  unpublishManyWorks: BatchPayload
  /** Find many Work documents that match criteria in specified stage and unpublish from target stages */
  unpublishManyWorksConnection: WorkConnection
  /** Unpublish one project from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishProject?: Maybe<Project>
  /** Unpublish one technology from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishTechnology?: Maybe<Technology>
  /** Unpublish one work from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
  unpublishWork?: Maybe<Work>
  /** Update one asset */
  updateAsset?: Maybe<Asset>
  /** Update one certification */
  updateCertification?: Maybe<Certification>
  /**
   * Update many assets
   * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
   */
  updateManyAssets: BatchPayload
  /** Update many Asset documents */
  updateManyAssetsConnection: AssetConnection
  /**
   * Update many certifications
   * @deprecated Please use the new paginated many mutation (updateManyCertificationsConnection)
   */
  updateManyCertifications: BatchPayload
  /** Update many Certification documents */
  updateManyCertificationsConnection: CertificationConnection
  /**
   * Update many projects
   * @deprecated Please use the new paginated many mutation (updateManyProjectsConnection)
   */
  updateManyProjects: BatchPayload
  /** Update many Project documents */
  updateManyProjectsConnection: ProjectConnection
  /**
   * Update many technologies
   * @deprecated Please use the new paginated many mutation (updateManyTechnologiesConnection)
   */
  updateManyTechnologies: BatchPayload
  /** Update many Technology documents */
  updateManyTechnologiesConnection: TechnologyConnection
  /**
   * Update many works
   * @deprecated Please use the new paginated many mutation (updateManyWorksConnection)
   */
  updateManyWorks: BatchPayload
  /** Update many Work documents */
  updateManyWorksConnection: WorkConnection
  /** Update one project */
  updateProject?: Maybe<Project>
  /** Update one scheduledRelease */
  updateScheduledRelease?: Maybe<ScheduledRelease>
  /** Update one technology */
  updateTechnology?: Maybe<Technology>
  /** Update one work */
  updateWork?: Maybe<Work>
  /** Upsert one asset */
  upsertAsset?: Maybe<Asset>
  /** Upsert one certification */
  upsertCertification?: Maybe<Certification>
  /** Upsert one project */
  upsertProject?: Maybe<Project>
  /** Upsert one technology */
  upsertTechnology?: Maybe<Technology>
  /** Upsert one work */
  upsertWork?: Maybe<Work>
}

export type MutationCreateAssetArgs = {
  data: AssetCreateInput
}

export type MutationCreateCertificationArgs = {
  data: CertificationCreateInput
}

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput
}

export type MutationCreateScheduledReleaseArgs = {
  data: ScheduledReleaseCreateInput
}

export type MutationCreateTechnologyArgs = {
  data: TechnologyCreateInput
}

export type MutationCreateWorkArgs = {
  data: WorkCreateInput
}

export type MutationDeleteAssetArgs = {
  where: AssetWhereUniqueInput
}

export type MutationDeleteCertificationArgs = {
  where: CertificationWhereUniqueInput
}

export type MutationDeleteManyAssetsArgs = {
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationDeleteManyCertificationsArgs = {
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationDeleteManyCertificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationDeleteManyProjectsArgs = {
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationDeleteManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationDeleteManyTechnologiesArgs = {
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationDeleteManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationDeleteManyWorksArgs = {
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationDeleteManyWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationDeleteProjectArgs = {
  where: ProjectWhereUniqueInput
}

export type MutationDeleteScheduledOperationArgs = {
  where: ScheduledOperationWhereUniqueInput
}

export type MutationDeleteScheduledReleaseArgs = {
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationDeleteTechnologyArgs = {
  where: TechnologyWhereUniqueInput
}

export type MutationDeleteWorkArgs = {
  where: WorkWhereUniqueInput
}

export type MutationPublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishCertificationArgs = {
  to?: Array<Stage>
  where: CertificationWhereUniqueInput
}

export type MutationPublishManyAssetsArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<AssetManyWhereInput>
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationPublishManyCertificationsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationPublishManyCertificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationPublishManyProjectsArgs = {
  to?: Array<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationPublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationPublishManyTechnologiesArgs = {
  to?: Array<Stage>
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationPublishManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationPublishManyWorksArgs = {
  to?: Array<Stage>
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationPublishManyWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: InputMaybe<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  to?: Array<Stage>
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationPublishProjectArgs = {
  to?: Array<Stage>
  where: ProjectWhereUniqueInput
}

export type MutationPublishTechnologyArgs = {
  to?: Array<Stage>
  where: TechnologyWhereUniqueInput
}

export type MutationPublishWorkArgs = {
  to?: Array<Stage>
  where: WorkWhereUniqueInput
}

export type MutationSchedulePublishAssetArgs = {
  locales?: InputMaybe<Array<Locale>>
  publishBase?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: AssetWhereUniqueInput
  withDefaultLocale?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationSchedulePublishCertificationArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: CertificationWhereUniqueInput
}

export type MutationSchedulePublishProjectArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: ProjectWhereUniqueInput
}

export type MutationSchedulePublishTechnologyArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: TechnologyWhereUniqueInput
}

export type MutationSchedulePublishWorkArgs = {
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  to?: Array<Stage>
  where: WorkWhereUniqueInput
}

export type MutationScheduleUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationScheduleUnpublishCertificationArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: CertificationWhereUniqueInput
}

export type MutationScheduleUnpublishProjectArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: ProjectWhereUniqueInput
}

export type MutationScheduleUnpublishTechnologyArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: TechnologyWhereUniqueInput
}

export type MutationScheduleUnpublishWorkArgs = {
  from?: Array<Stage>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  releaseId?: InputMaybe<Scalars['String']['input']>
  where: WorkWhereUniqueInput
}

export type MutationUnpublishAssetArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where: AssetWhereUniqueInput
}

export type MutationUnpublishCertificationArgs = {
  from?: Array<Stage>
  where: CertificationWhereUniqueInput
}

export type MutationUnpublishManyAssetsArgs = {
  from?: Array<Stage>
  locales?: InputMaybe<Array<Locale>>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  unpublishBase?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUnpublishManyCertificationsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationUnpublishManyCertificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationUnpublishManyProjectsArgs = {
  from?: Array<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUnpublishManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUnpublishManyTechnologiesArgs = {
  from?: Array<Stage>
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUnpublishManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUnpublishManyWorksArgs = {
  from?: Array<Stage>
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationUnpublishManyWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  from?: Array<Stage>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: InputMaybe<Stage>
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationUnpublishProjectArgs = {
  from?: Array<Stage>
  where: ProjectWhereUniqueInput
}

export type MutationUnpublishTechnologyArgs = {
  from?: Array<Stage>
  where: TechnologyWhereUniqueInput
}

export type MutationUnpublishWorkArgs = {
  from?: Array<Stage>
  where: WorkWhereUniqueInput
}

export type MutationUpdateAssetArgs = {
  data: AssetUpdateInput
  where: AssetWhereUniqueInput
}

export type MutationUpdateCertificationArgs = {
  data: CertificationUpdateInput
  where: CertificationWhereUniqueInput
}

export type MutationUpdateManyAssetsArgs = {
  data: AssetUpdateManyInput
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: AssetUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetManyWhereInput>
}

export type MutationUpdateManyCertificationsArgs = {
  data: CertificationUpdateManyInput
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationUpdateManyCertificationsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: CertificationUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CertificationManyWhereInput>
}

export type MutationUpdateManyProjectsArgs = {
  data: ProjectUpdateManyInput
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUpdateManyProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: ProjectUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectManyWhereInput>
}

export type MutationUpdateManyTechnologiesArgs = {
  data: TechnologyUpdateManyInput
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUpdateManyTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: TechnologyUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TechnologyManyWhereInput>
}

export type MutationUpdateManyWorksArgs = {
  data: WorkUpdateManyInput
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationUpdateManyWorksConnectionArgs = {
  after?: InputMaybe<Scalars['ID']['input']>
  before?: InputMaybe<Scalars['ID']['input']>
  data: WorkUpdateManyInput
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<WorkManyWhereInput>
}

export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput
  where: ProjectWhereUniqueInput
}

export type MutationUpdateScheduledReleaseArgs = {
  data: ScheduledReleaseUpdateInput
  where: ScheduledReleaseWhereUniqueInput
}

export type MutationUpdateTechnologyArgs = {
  data: TechnologyUpdateInput
  where: TechnologyWhereUniqueInput
}

export type MutationUpdateWorkArgs = {
  data: WorkUpdateInput
  where: WorkWhereUniqueInput
}

export type MutationUpsertAssetArgs = {
  upsert: AssetUpsertInput
  where: AssetWhereUniqueInput
}

export type MutationUpsertCertificationArgs = {
  upsert: CertificationUpsertInput
  where: CertificationWhereUniqueInput
}

export type MutationUpsertProjectArgs = {
  upsert: ProjectUpsertInput
  where: ProjectWhereUniqueInput
}

export type MutationUpsertTechnologyArgs = {
  upsert: TechnologyUpsertInput
  where: TechnologyWhereUniqueInput
}

export type MutationUpsertWorkArgs = {
  upsert: WorkUpsertInput
  where: WorkWhereUniqueInput
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID']['output']
  /** The Stage of an object */
  stage: Stage
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output']
  /** Number of items in the current page. */
  pageSize?: Maybe<Scalars['Int']['output']>
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>
}

export enum ProgrammingTopics {
  ObjectOrientedProgrammingOopPoo = 'object_oriented_programming_oop_poo'
}

export type Project = Entity &
  Node & {
    __typename?: 'Project'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    date: Scalars['Date']['output']
    description: Scalars['String']['output']
    /** Get the document in other stages */
    documentInStages: Array<Project>
    /** List of Project versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    image: Asset
    name: Scalars['String']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    slug: Scalars['String']['output']
    /** System stage field */
    stage: Stage
    technologies: Array<Technology>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
    url: Scalars['String']['output']
  }

export type ProjectCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProjectDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type ProjectHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type ProjectImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type ProjectPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProjectScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type ProjectTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<TechnologyOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TechnologyWhereInput>
}

export type ProjectUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ProjectConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ProjectWhereUniqueInput
}

/** A connection to a list of items. */
export type ProjectConnection = {
  __typename?: 'ProjectConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ProjectEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ProjectCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  date: Scalars['Date']['input']
  description: Scalars['String']['input']
  image: AssetCreateOneInlineInput
  name: Scalars['String']['input']
  slug: Scalars['String']['input']
  technologies?: InputMaybe<TechnologyCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  url: Scalars['String']['input']
}

export type ProjectCreateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Create and connect multiple existing Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>
}

export type ProjectCreateOneInlineInput = {
  /** Connect one existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>
}

/** An edge in a connection. */
export type ProjectEdge = {
  __typename?: 'ProjectEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Project
}

/** Identifies documents */
export type ProjectManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  technologies_every?: InputMaybe<TechnologyWhereInput>
  technologies_none?: InputMaybe<TechnologyWhereInput>
  technologies_some?: InputMaybe<TechnologyWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

export enum ProjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DateAsc = 'date_ASC',
  DateDesc = 'date_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

export type ProjectUpdateInput = {
  date?: InputMaybe<Scalars['Date']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<AssetUpdateOneInlineInput>
  name?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  technologies?: InputMaybe<TechnologyUpdateManyInlineInput>
  url?: InputMaybe<Scalars['String']['input']>
}

export type ProjectUpdateManyInlineInput = {
  /** Connect multiple existing Project documents */
  connect?: InputMaybe<Array<ProjectConnectInput>>
  /** Create and connect multiple Project documents */
  create?: InputMaybe<Array<ProjectCreateInput>>
  /** Delete multiple Project documents */
  delete?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Disconnect multiple Project documents */
  disconnect?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Project documents */
  set?: InputMaybe<Array<ProjectWhereUniqueInput>>
  /** Update multiple Project documents */
  update?: InputMaybe<Array<ProjectUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Project documents */
  upsert?: InputMaybe<Array<ProjectUpsertWithNestedWhereUniqueInput>>
}

export type ProjectUpdateManyInput = {
  date?: InputMaybe<Scalars['Date']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type ProjectUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ProjectUpdateManyInput
  /** Document search */
  where: ProjectWhereInput
}

export type ProjectUpdateOneInlineInput = {
  /** Connect existing Project document */
  connect?: InputMaybe<ProjectWhereUniqueInput>
  /** Create and connect one Project document */
  create?: InputMaybe<ProjectCreateInput>
  /** Delete currently connected Project document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Project document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Project document */
  update?: InputMaybe<ProjectUpdateWithNestedWhereUniqueInput>
  /** Upsert single Project document */
  upsert?: InputMaybe<ProjectUpsertWithNestedWhereUniqueInput>
}

export type ProjectUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ProjectUpdateInput
  /** Unique document search */
  where: ProjectWhereUniqueInput
}

export type ProjectUpsertInput = {
  /** Create document if it didn't exist */
  create: ProjectCreateInput
  /** Update document if it exists */
  update: ProjectUpdateInput
}

export type ProjectUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ProjectUpsertInput
  /** Unique document search */
  where: ProjectWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type ProjectWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ProjectWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  date?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  date_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  date_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  date_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  date_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  date_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  date_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  date_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<ProjectWhereStageInput>
  documentInStages_none?: InputMaybe<ProjectWhereStageInput>
  documentInStages_some?: InputMaybe<ProjectWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  image?: InputMaybe<AssetWhereInput>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  slug?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  slug_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  slug_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  slug_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  slug_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  slug_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  slug_starts_with?: InputMaybe<Scalars['String']['input']>
  technologies_every?: InputMaybe<TechnologyWhereInput>
  technologies_none?: InputMaybe<TechnologyWhereInput>
  technologies_some?: InputMaybe<TechnologyWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
  url?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  url_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  url_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  url_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  url_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  url_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  url_starts_with?: InputMaybe<Scalars['String']['input']>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type ProjectWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ProjectWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ProjectWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ProjectWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<ProjectWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Project record uniquely */
export type ProjectWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
}

export type PublishLocaleInput = {
  /** Locales to publish */
  locale: Locale
  /** Stages to publish selected locales to */
  stages: Array<Stage>
}

export type Query = {
  __typename?: 'Query'
  /** Retrieve a single asset */
  asset?: Maybe<Asset>
  /** Retrieve document version */
  assetVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple assets */
  assets: Array<Asset>
  /** Retrieve multiple assets using the Relay connection interface */
  assetsConnection: AssetConnection
  /** Retrieve a single certification */
  certification?: Maybe<Certification>
  /** Retrieve document version */
  certificationVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple certifications */
  certifications: Array<Certification>
  /** Retrieve multiple certifications using the Relay connection interface */
  certificationsConnection: CertificationConnection
  /** Fetches an object given its ID */
  entities?: Maybe<Array<Entity>>
  /** Fetches an object given its ID */
  node?: Maybe<Node>
  /** Retrieve a single project */
  project?: Maybe<Project>
  /** Retrieve document version */
  projectVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple projects */
  projects: Array<Project>
  /** Retrieve multiple projects using the Relay connection interface */
  projectsConnection: ProjectConnection
  /** Retrieve a single scheduledOperation */
  scheduledOperation?: Maybe<ScheduledOperation>
  /** Retrieve multiple scheduledOperations */
  scheduledOperations: Array<ScheduledOperation>
  /** Retrieve multiple scheduledOperations using the Relay connection interface */
  scheduledOperationsConnection: ScheduledOperationConnection
  /** Retrieve a single scheduledRelease */
  scheduledRelease?: Maybe<ScheduledRelease>
  /** Retrieve multiple scheduledReleases */
  scheduledReleases: Array<ScheduledRelease>
  /** Retrieve multiple scheduledReleases using the Relay connection interface */
  scheduledReleasesConnection: ScheduledReleaseConnection
  /** Retrieve multiple technologies */
  technologies: Array<Technology>
  /** Retrieve multiple technologies using the Relay connection interface */
  technologiesConnection: TechnologyConnection
  /** Retrieve a single technology */
  technology?: Maybe<Technology>
  /** Retrieve document version */
  technologyVersion?: Maybe<DocumentVersion>
  /** Retrieve a single user */
  user?: Maybe<User>
  /** Retrieve multiple users */
  users: Array<User>
  /** Retrieve multiple users using the Relay connection interface */
  usersConnection: UserConnection
  /** Retrieve a single work */
  work?: Maybe<Work>
  /** Retrieve document version */
  workVersion?: Maybe<DocumentVersion>
  /** Retrieve multiple works */
  works: Array<Work>
  /** Retrieve multiple works using the Relay connection interface */
  worksConnection: WorkConnection
}

export type QueryAssetArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: AssetWhereUniqueInput
}

export type QueryAssetVersionArgs = {
  where: VersionWhereInput
}

export type QueryAssetsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryAssetsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<AssetOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<AssetWhereInput>
}

export type QueryCertificationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: CertificationWhereUniqueInput
}

export type QueryCertificationVersionArgs = {
  where: VersionWhereInput
}

export type QueryCertificationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CertificationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<CertificationWhereInput>
}

export type QueryCertificationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<CertificationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<CertificationWhereInput>
}

export type QueryEntitiesArgs = {
  locales?: InputMaybe<Array<Locale>>
  where: Array<EntityWhereInput>
}

export type QueryNodeArgs = {
  id: Scalars['ID']['input']
  locales?: Array<Locale>
  stage?: Stage
}

export type QueryProjectArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ProjectWhereUniqueInput
}

export type QueryProjectVersionArgs = {
  where: VersionWhereInput
}

export type QueryProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProjectOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ProjectWhereInput>
}

export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ProjectOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ProjectWhereInput>
}

export type QueryScheduledOperationArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledOperationWhereUniqueInput
}

export type QueryScheduledOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledOperationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type QueryScheduledReleaseArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: ScheduledReleaseWhereUniqueInput
}

export type QueryScheduledReleasesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryScheduledReleasesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<ScheduledReleaseOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<ScheduledReleaseWhereInput>
}

export type QueryTechnologiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<TechnologyOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<TechnologyWhereInput>
}

export type QueryTechnologiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<TechnologyOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<TechnologyWhereInput>
}

export type QueryTechnologyArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: TechnologyWhereUniqueInput
}

export type QueryTechnologyVersionArgs = {
  where: VersionWhereInput
}

export type QueryUserArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<UserOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<UserWhereInput>
}

export type QueryWorkArgs = {
  locales?: Array<Locale>
  stage?: Stage
  where: WorkWhereUniqueInput
}

export type QueryWorkVersionArgs = {
  where: VersionWhereInput
}

export type QueryWorksArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WorkOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<WorkWhereInput>
}

export type QueryWorksConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: Array<Locale>
  orderBy?: InputMaybe<WorkOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  stage?: Stage
  where?: InputMaybe<WorkWhereInput>
}

/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type Rgba = {
  __typename?: 'RGBA'
  a: Scalars['RGBATransparency']['output']
  b: Scalars['RGBAHue']['output']
  g: Scalars['RGBAHue']['output']
  r: Scalars['RGBAHue']['output']
}

/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export type RgbaInput = {
  a: Scalars['RGBATransparency']['input']
  b: Scalars['RGBAHue']['input']
  g: Scalars['RGBAHue']['input']
  r: Scalars['RGBAHue']['input']
}

/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export type RichText = {
  __typename?: 'RichText'
  /** Returns HTMl representation */
  html: Scalars['String']['output']
  /** Returns Markdown representation */
  markdown: Scalars['String']['output']
  /** Returns AST representation */
  raw: Scalars['RichTextAST']['output']
  /** Returns plain-text contents of RichText */
  text: Scalars['String']['output']
}

/** Scheduled Operation system model */
export type ScheduledOperation = Entity &
  Node & {
    __typename?: 'ScheduledOperation'
    affectedDocuments: Array<ScheduledOperationAffectedDocument>
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Operation description */
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<ScheduledOperation>
    /** Operation error message */
    errorMessage?: Maybe<Scalars['String']['output']>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars['Json']['output']
    /** The release this operation is scheduled for */
    release?: Maybe<ScheduledRelease>
    /** System stage field */
    stage: Stage
    /** operation Status */
    status: ScheduledOperationStatus
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

/** Scheduled Operation system model */
export type ScheduledOperationAffectedDocumentsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
}

/** Scheduled Operation system model */
export type ScheduledOperationCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Operation system model */
export type ScheduledOperationPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationReleaseArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Operation system model */
export type ScheduledOperationUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledOperationAffectedDocument =
  | Asset
  | Certification
  | Project
  | Technology
  | Work

export type ScheduledOperationConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledOperationWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledOperationConnection = {
  __typename?: 'ScheduledOperationConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledOperationEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledOperationCreateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationCreateOneInlineInput = {
  /** Connect one existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
}

/** An edge in a connection. */
export type ScheduledOperationEdge = {
  __typename?: 'ScheduledOperationEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledOperation
}

/** Identifies documents */
export type ScheduledOperationManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledOperationOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Operation Status */
export enum ScheduledOperationStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledOperationUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledOperation documents */
  connect?: InputMaybe<Array<ScheduledOperationConnectInput>>
  /** Disconnect multiple ScheduledOperation documents */
  disconnect?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledOperation documents */
  set?: InputMaybe<Array<ScheduledOperationWhereUniqueInput>>
}

export type ScheduledOperationUpdateOneInlineInput = {
  /** Connect existing ScheduledOperation document */
  connect?: InputMaybe<ScheduledOperationWhereUniqueInput>
  /** Disconnect currently connected ScheduledOperation document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type ScheduledOperationWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledOperationWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  /** All values containing the given json path. */
  rawPayload_json_path_exists?: InputMaybe<Scalars['String']['input']>
  /**
   * Recursively tries to find the provided JSON scalar value inside the field.
   * It does use an exact match when comparing values.
   * If you pass `null` as value the filter will be ignored.
   * Note: This filter fails if you try to look for a non scalar JSON value!
   */
  rawPayload_value_recursive?: InputMaybe<Scalars['Json']['input']>
  release?: InputMaybe<ScheduledReleaseWhereInput>
  status?: InputMaybe<ScheduledOperationStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledOperationStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledOperationStatus>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledOperation record uniquely */
export type ScheduledOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Scheduled Release system model */
export type ScheduledRelease = Entity &
  Node & {
    __typename?: 'ScheduledRelease'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Release description */
    description?: Maybe<Scalars['String']['output']>
    /** Get the document in other stages */
    documentInStages: Array<ScheduledRelease>
    /** Release error message */
    errorMessage?: Maybe<Scalars['String']['output']>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** Whether scheduled release should be run */
    isActive: Scalars['Boolean']['output']
    /** Whether scheduled release is implicit */
    isImplicit: Scalars['Boolean']['output']
    /** Operations to run with this release */
    operations: Array<ScheduledOperation>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    /** Release date and time */
    releaseAt?: Maybe<Scalars['DateTime']['output']>
    /** System stage field */
    stage: Stage
    /** Release Status */
    status: ScheduledReleaseStatus
    /** Release Title */
    title?: Maybe<Scalars['String']['output']>
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

/** Scheduled Release system model */
export type ScheduledReleaseCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

/** Scheduled Release system model */
export type ScheduledReleaseOperationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ScheduledOperationOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

/** Scheduled Release system model */
export type ScheduledReleasePublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

/** Scheduled Release system model */
export type ScheduledReleaseUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type ScheduledReleaseConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: ScheduledReleaseWhereUniqueInput
}

/** A connection to a list of items. */
export type ScheduledReleaseConnection = {
  __typename?: 'ScheduledReleaseConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<ScheduledReleaseEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type ScheduledReleaseCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type ScheduledReleaseCreateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Create and connect multiple existing ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
}

export type ScheduledReleaseCreateOneInlineInput = {
  /** Connect one existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
}

/** An edge in a connection. */
export type ScheduledReleaseEdge = {
  __typename?: 'ScheduledReleaseEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: ScheduledRelease
}

/** Identifies documents */
export type ScheduledReleaseManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum ScheduledReleaseOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ErrorMessageAsc = 'errorMessage_ASC',
  ErrorMessageDesc = 'errorMessage_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  IsImplicitAsc = 'isImplicit_ASC',
  IsImplicitDesc = 'isImplicit_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  ReleaseAtAsc = 'releaseAt_ASC',
  ReleaseAtDesc = 'releaseAt_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

/** System Scheduled Release Status */
export enum ScheduledReleaseStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Pending = 'PENDING'
}

export type ScheduledReleaseUpdateInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyInlineInput = {
  /** Connect multiple existing ScheduledRelease documents */
  connect?: InputMaybe<Array<ScheduledReleaseConnectInput>>
  /** Create and connect multiple ScheduledRelease documents */
  create?: InputMaybe<Array<ScheduledReleaseCreateInput>>
  /** Delete multiple ScheduledRelease documents */
  delete?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Disconnect multiple ScheduledRelease documents */
  disconnect?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing ScheduledRelease documents */
  set?: InputMaybe<Array<ScheduledReleaseWhereUniqueInput>>
  /** Update multiple ScheduledRelease documents */
  update?: InputMaybe<Array<ScheduledReleaseUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple ScheduledRelease documents */
  upsert?: InputMaybe<Array<ScheduledReleaseUpsertWithNestedWhereUniqueInput>>
}

export type ScheduledReleaseUpdateManyInput = {
  description?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type ScheduledReleaseUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: ScheduledReleaseUpdateManyInput
  /** Document search */
  where: ScheduledReleaseWhereInput
}

export type ScheduledReleaseUpdateOneInlineInput = {
  /** Connect existing ScheduledRelease document */
  connect?: InputMaybe<ScheduledReleaseWhereUniqueInput>
  /** Create and connect one ScheduledRelease document */
  create?: InputMaybe<ScheduledReleaseCreateInput>
  /** Delete currently connected ScheduledRelease document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected ScheduledRelease document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single ScheduledRelease document */
  update?: InputMaybe<ScheduledReleaseUpdateWithNestedWhereUniqueInput>
  /** Upsert single ScheduledRelease document */
  upsert?: InputMaybe<ScheduledReleaseUpsertWithNestedWhereUniqueInput>
}

export type ScheduledReleaseUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: ScheduledReleaseUpdateInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

export type ScheduledReleaseUpsertInput = {
  /** Create document if it didn't exist */
  create: ScheduledReleaseCreateInput
  /** Update document if it exists */
  update: ScheduledReleaseUpdateInput
}

export type ScheduledReleaseUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: ScheduledReleaseUpsertInput
  /** Unique document search */
  where: ScheduledReleaseWhereUniqueInput
}

/** Identifies documents */
export type ScheduledReleaseWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<ScheduledReleaseWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  errorMessage?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  errorMessage_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  errorMessage_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  errorMessage_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  errorMessage_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  errorMessage_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  errorMessage_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  errorMessage_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  /** All values not starting with the given string. */
  errorMessage_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  errorMessage_starts_with?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  isImplicit?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isImplicit_not?: InputMaybe<Scalars['Boolean']['input']>
  operations_every?: InputMaybe<ScheduledOperationWhereInput>
  operations_none?: InputMaybe<ScheduledOperationWhereInput>
  operations_some?: InputMaybe<ScheduledOperationWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  releaseAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  releaseAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  releaseAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  releaseAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  releaseAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  releaseAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  releaseAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  releaseAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  status?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are contained in given list. */
  status_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  /** Any other value that exists and is not equal to the given value. */
  status_not?: InputMaybe<ScheduledReleaseStatus>
  /** All values that are not contained in given list. */
  status_not_in?: InputMaybe<Array<InputMaybe<ScheduledReleaseStatus>>>
  title?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  title_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  title_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  title_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  title_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  title_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  title_starts_with?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** References ScheduledRelease record uniquely */
export type ScheduledReleaseWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

/** Stage system enumeration */
export enum Stage {
  /** The Draft is the default stage for all your content. */
  Draft = 'DRAFT',
  /** The Published stage is where you can publish your content to. */
  Published = 'PUBLISHED'
}

export enum SystemDateTimeFieldVariation {
  Base = 'BASE',
  Combined = 'COMBINED',
  Localization = 'LOCALIZATION'
}

export type Technology = Entity &
  Node & {
    __typename?: 'Technology'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    /** Get the document in other stages */
    documentInStages: Array<Technology>
    /** List of Technology versions */
    history: Array<Version>
    icon: Asset
    /** The unique identifier */
    id: Scalars['ID']['output']
    name: Scalars['String']['output']
    projects: Array<Project>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

export type TechnologyCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type TechnologyDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type TechnologyHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type TechnologyIconArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type TechnologyProjectsArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  orderBy?: InputMaybe<ProjectOrderByInput>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ProjectWhereInput>
}

export type TechnologyPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type TechnologyScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type TechnologyUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type TechnologyConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: TechnologyWhereUniqueInput
}

/** A connection to a list of items. */
export type TechnologyConnection = {
  __typename?: 'TechnologyConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<TechnologyEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type TechnologyCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  icon: AssetCreateOneInlineInput
  name: Scalars['String']['input']
  projects?: InputMaybe<ProjectCreateManyInlineInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type TechnologyCreateManyInlineInput = {
  /** Connect multiple existing Technology documents */
  connect?: InputMaybe<Array<TechnologyWhereUniqueInput>>
  /** Create and connect multiple existing Technology documents */
  create?: InputMaybe<Array<TechnologyCreateInput>>
}

export type TechnologyCreateOneInlineInput = {
  /** Connect one existing Technology document */
  connect?: InputMaybe<TechnologyWhereUniqueInput>
  /** Create and connect one Technology document */
  create?: InputMaybe<TechnologyCreateInput>
}

/** An edge in a connection. */
export type TechnologyEdge = {
  __typename?: 'TechnologyEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Technology
}

/** Identifies documents */
export type TechnologyManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<TechnologyWhereStageInput>
  documentInStages_none?: InputMaybe<TechnologyWhereStageInput>
  documentInStages_some?: InputMaybe<TechnologyWhereStageInput>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  projects_every?: InputMaybe<ProjectWhereInput>
  projects_none?: InputMaybe<ProjectWhereInput>
  projects_some?: InputMaybe<ProjectWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum TechnologyOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type TechnologyUpdateInput = {
  icon?: InputMaybe<AssetUpdateOneInlineInput>
  name?: InputMaybe<Scalars['String']['input']>
  projects?: InputMaybe<ProjectUpdateManyInlineInput>
}

export type TechnologyUpdateManyInlineInput = {
  /** Connect multiple existing Technology documents */
  connect?: InputMaybe<Array<TechnologyConnectInput>>
  /** Create and connect multiple Technology documents */
  create?: InputMaybe<Array<TechnologyCreateInput>>
  /** Delete multiple Technology documents */
  delete?: InputMaybe<Array<TechnologyWhereUniqueInput>>
  /** Disconnect multiple Technology documents */
  disconnect?: InputMaybe<Array<TechnologyWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Technology documents */
  set?: InputMaybe<Array<TechnologyWhereUniqueInput>>
  /** Update multiple Technology documents */
  update?: InputMaybe<Array<TechnologyUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Technology documents */
  upsert?: InputMaybe<Array<TechnologyUpsertWithNestedWhereUniqueInput>>
}

export type TechnologyUpdateManyInput = {
  name?: InputMaybe<Scalars['String']['input']>
}

export type TechnologyUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: TechnologyUpdateManyInput
  /** Document search */
  where: TechnologyWhereInput
}

export type TechnologyUpdateOneInlineInput = {
  /** Connect existing Technology document */
  connect?: InputMaybe<TechnologyWhereUniqueInput>
  /** Create and connect one Technology document */
  create?: InputMaybe<TechnologyCreateInput>
  /** Delete currently connected Technology document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Technology document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Technology document */
  update?: InputMaybe<TechnologyUpdateWithNestedWhereUniqueInput>
  /** Upsert single Technology document */
  upsert?: InputMaybe<TechnologyUpsertWithNestedWhereUniqueInput>
}

export type TechnologyUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: TechnologyUpdateInput
  /** Unique document search */
  where: TechnologyWhereUniqueInput
}

export type TechnologyUpsertInput = {
  /** Create document if it didn't exist */
  create: TechnologyCreateInput
  /** Update document if it exists */
  update: TechnologyUpdateInput
}

export type TechnologyUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: TechnologyUpsertInput
  /** Unique document search */
  where: TechnologyWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type TechnologyWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type TechnologyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  documentInStages_every?: InputMaybe<TechnologyWhereStageInput>
  documentInStages_none?: InputMaybe<TechnologyWhereStageInput>
  documentInStages_some?: InputMaybe<TechnologyWhereStageInput>
  icon?: InputMaybe<AssetWhereInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  projects_every?: InputMaybe<ProjectWhereInput>
  projects_none?: InputMaybe<ProjectWhereInput>
  projects_some?: InputMaybe<ProjectWhereInput>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type TechnologyWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<TechnologyWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<TechnologyWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<TechnologyWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<TechnologyWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Technology record uniquely */
export type TechnologyWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type UnpublishLocaleInput = {
  /** Locales to unpublish */
  locale: Locale
  /** Stages to unpublish selected locales from */
  stages: Array<Stage>
}

/** User system model */
export type User = Entity &
  Node & {
    __typename?: 'User'
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** Get the document in other stages */
    documentInStages: Array<User>
    /** The unique identifier */
    id: Scalars['ID']['output']
    /** Flag to determine if user is active or not */
    isActive: Scalars['Boolean']['output']
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind
    /** The username */
    name: Scalars['String']['output']
    /** Profile Picture url */
    picture?: Maybe<Scalars['String']['output']>
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** System stage field */
    stage: Stage
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
  }

/** User system model */
export type UserDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type UserConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: UserWhereUniqueInput
}

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<UserEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type UserCreateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserCreateOneInlineInput = {
  /** Connect one existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
}

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: User
}

/** System User Kind */
export enum UserKind {
  AppToken = 'APP_TOKEN',
  Member = 'MEMBER',
  Pat = 'PAT',
  Public = 'PUBLIC',
  Webhook = 'WEBHOOK'
}

/** Identifies documents */
export type UserManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

export enum UserOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  KindAsc = 'kind_ASC',
  KindDesc = 'kind_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PictureAsc = 'picture_ASC',
  PictureDesc = 'picture_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type UserUpdateManyInlineInput = {
  /** Connect multiple existing User documents */
  connect?: InputMaybe<Array<UserConnectInput>>
  /** Disconnect multiple User documents */
  disconnect?: InputMaybe<Array<UserWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing User documents */
  set?: InputMaybe<Array<UserWhereUniqueInput>>
}

export type UserUpdateOneInlineInput = {
  /** Connect existing User document */
  connect?: InputMaybe<UserWhereUniqueInput>
  /** Disconnect currently connected User document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
}

/** This contains a set of filters that can be used to compare values internally */
export type UserWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type UserWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  documentInStages_every?: InputMaybe<UserWhereStageInput>
  documentInStages_none?: InputMaybe<UserWhereStageInput>
  documentInStages_some?: InputMaybe<UserWhereStageInput>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  isActive?: InputMaybe<Scalars['Boolean']['input']>
  /** Any other value that exists and is not equal to the given value. */
  isActive_not?: InputMaybe<Scalars['Boolean']['input']>
  kind?: InputMaybe<UserKind>
  /** All values that are contained in given list. */
  kind_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  /** Any other value that exists and is not equal to the given value. */
  kind_not?: InputMaybe<UserKind>
  /** All values that are not contained in given list. */
  kind_not_in?: InputMaybe<Array<InputMaybe<UserKind>>>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  picture?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  picture_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  picture_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  picture_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  picture_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  picture_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  picture_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  picture_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  picture_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  picture_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type UserWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<UserWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<UserWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<UserWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References User record uniquely */
export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export type Version = {
  __typename?: 'Version'
  createdAt: Scalars['DateTime']['output']
  id: Scalars['ID']['output']
  revision: Scalars['Int']['output']
  stage: Stage
}

export type VersionWhereInput = {
  id: Scalars['ID']['input']
  revision: Scalars['Int']['input']
  stage: Stage
}

export type Work = Entity &
  Node & {
    __typename?: 'Work'
    companyImage: Asset
    companyName: Scalars['String']['output']
    /** The time the document was created */
    createdAt: Scalars['DateTime']['output']
    /** User that created this document */
    createdBy?: Maybe<User>
    description: Scalars['String']['output']
    /** Get the document in other stages */
    documentInStages: Array<Work>
    employmentMode: EmploymentModes
    employmentType: EmploymentTypes
    endDate?: Maybe<Scalars['Date']['output']>
    /** List of Work versions */
    history: Array<Version>
    /** The unique identifier */
    id: Scalars['ID']['output']
    industry: Scalars['String']['output']
    location: Scalars['String']['output']
    name: Scalars['String']['output']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: Maybe<Scalars['DateTime']['output']>
    /** User that last published this document */
    publishedBy?: Maybe<User>
    scheduledIn: Array<ScheduledOperation>
    /** System stage field */
    stage: Stage
    startDate: Scalars['Date']['output']
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']['output']
    /** User that last updated this document */
    updatedBy?: Maybe<User>
  }

export type WorkCompanyImageArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
  where?: InputMaybe<AssetSingleRelationWhereInput>
}

export type WorkCreatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkDocumentInStagesArgs = {
  includeCurrent?: Scalars['Boolean']['input']
  inheritLocale?: Scalars['Boolean']['input']
  stages?: Array<Stage>
}

export type WorkHistoryArgs = {
  limit?: Scalars['Int']['input']
  skip?: Scalars['Int']['input']
  stageOverride?: InputMaybe<Stage>
}

export type WorkPublishedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkScheduledInArgs = {
  after?: InputMaybe<Scalars['String']['input']>
  before?: InputMaybe<Scalars['String']['input']>
  first?: InputMaybe<Scalars['Int']['input']>
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  last?: InputMaybe<Scalars['Int']['input']>
  locales?: InputMaybe<Array<Locale>>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ScheduledOperationWhereInput>
}

export type WorkUpdatedByArgs = {
  forceParentLocale?: InputMaybe<Scalars['Boolean']['input']>
  locales?: InputMaybe<Array<Locale>>
}

export type WorkConnectInput = {
  /** Allow to specify document position in list of connected documents, will default to appending at end of list */
  position?: InputMaybe<ConnectPositionInput>
  /** Document to connect */
  where: WorkWhereUniqueInput
}

/** A connection to a list of items. */
export type WorkConnection = {
  __typename?: 'WorkConnection'
  aggregate: Aggregate
  /** A list of edges. */
  edges: Array<WorkEdge>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
}

export type WorkCreateInput = {
  companyImage: AssetCreateOneInlineInput
  companyName: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  description: Scalars['String']['input']
  employmentMode: EmploymentModes
  employmentType: EmploymentTypes
  endDate?: InputMaybe<Scalars['Date']['input']>
  industry: Scalars['String']['input']
  location: Scalars['String']['input']
  name: Scalars['String']['input']
  startDate: Scalars['Date']['input']
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
}

export type WorkCreateManyInlineInput = {
  /** Connect multiple existing Work documents */
  connect?: InputMaybe<Array<WorkWhereUniqueInput>>
  /** Create and connect multiple existing Work documents */
  create?: InputMaybe<Array<WorkCreateInput>>
}

export type WorkCreateOneInlineInput = {
  /** Connect one existing Work document */
  connect?: InputMaybe<WorkWhereUniqueInput>
  /** Create and connect one Work document */
  create?: InputMaybe<WorkCreateInput>
}

/** An edge in a connection. */
export type WorkEdge = {
  __typename?: 'WorkEdge'
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output']
  /** The item at the end of the edge. */
  node: Work
}

/** Identifies documents */
export type WorkManyWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  companyImage?: InputMaybe<AssetWhereInput>
  companyName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<WorkWhereStageInput>
  documentInStages_none?: InputMaybe<WorkWhereStageInput>
  documentInStages_some?: InputMaybe<WorkWhereStageInput>
  employmentMode?: InputMaybe<EmploymentModes>
  /** All values that are contained in given list. */
  employmentMode_in?: InputMaybe<Array<InputMaybe<EmploymentModes>>>
  /** Any other value that exists and is not equal to the given value. */
  employmentMode_not?: InputMaybe<EmploymentModes>
  /** All values that are not contained in given list. */
  employmentMode_not_in?: InputMaybe<Array<InputMaybe<EmploymentModes>>>
  employmentType?: InputMaybe<EmploymentTypes>
  /** All values that are contained in given list. */
  employmentType_in?: InputMaybe<Array<InputMaybe<EmploymentTypes>>>
  /** Any other value that exists and is not equal to the given value. */
  employmentType_not?: InputMaybe<EmploymentTypes>
  /** All values that are not contained in given list. */
  employmentType_not_in?: InputMaybe<Array<InputMaybe<EmploymentTypes>>>
  endDate?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  industry?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  industry_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  industry_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  industry_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  industry_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  industry_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  industry_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  industry_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  industry_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  industry_starts_with?: InputMaybe<Scalars['String']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  startDate?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

export enum WorkOrderByInput {
  CompanyNameAsc = 'companyName_ASC',
  CompanyNameDesc = 'companyName_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EmploymentModeAsc = 'employmentMode_ASC',
  EmploymentModeDesc = 'employmentMode_DESC',
  EmploymentTypeAsc = 'employmentType_ASC',
  EmploymentTypeDesc = 'employmentType_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndustryAsc = 'industry_ASC',
  IndustryDesc = 'industry_DESC',
  LocationAsc = 'location_ASC',
  LocationDesc = 'location_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PublishedAtAsc = 'publishedAt_ASC',
  PublishedAtDesc = 'publishedAt_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC'
}

export type WorkUpdateInput = {
  companyImage?: InputMaybe<AssetUpdateOneInlineInput>
  companyName?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  employmentMode?: InputMaybe<EmploymentModes>
  employmentType?: InputMaybe<EmploymentTypes>
  endDate?: InputMaybe<Scalars['Date']['input']>
  industry?: InputMaybe<Scalars['String']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  startDate?: InputMaybe<Scalars['Date']['input']>
}

export type WorkUpdateManyInlineInput = {
  /** Connect multiple existing Work documents */
  connect?: InputMaybe<Array<WorkConnectInput>>
  /** Create and connect multiple Work documents */
  create?: InputMaybe<Array<WorkCreateInput>>
  /** Delete multiple Work documents */
  delete?: InputMaybe<Array<WorkWhereUniqueInput>>
  /** Disconnect multiple Work documents */
  disconnect?: InputMaybe<Array<WorkWhereUniqueInput>>
  /** Override currently-connected documents with multiple existing Work documents */
  set?: InputMaybe<Array<WorkWhereUniqueInput>>
  /** Update multiple Work documents */
  update?: InputMaybe<Array<WorkUpdateWithNestedWhereUniqueInput>>
  /** Upsert multiple Work documents */
  upsert?: InputMaybe<Array<WorkUpsertWithNestedWhereUniqueInput>>
}

export type WorkUpdateManyInput = {
  companyName?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  employmentMode?: InputMaybe<EmploymentModes>
  employmentType?: InputMaybe<EmploymentTypes>
  endDate?: InputMaybe<Scalars['Date']['input']>
  industry?: InputMaybe<Scalars['String']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  startDate?: InputMaybe<Scalars['Date']['input']>
}

export type WorkUpdateManyWithNestedWhereInput = {
  /** Update many input */
  data: WorkUpdateManyInput
  /** Document search */
  where: WorkWhereInput
}

export type WorkUpdateOneInlineInput = {
  /** Connect existing Work document */
  connect?: InputMaybe<WorkWhereUniqueInput>
  /** Create and connect one Work document */
  create?: InputMaybe<WorkCreateInput>
  /** Delete currently connected Work document */
  delete?: InputMaybe<Scalars['Boolean']['input']>
  /** Disconnect currently connected Work document */
  disconnect?: InputMaybe<Scalars['Boolean']['input']>
  /** Update single Work document */
  update?: InputMaybe<WorkUpdateWithNestedWhereUniqueInput>
  /** Upsert single Work document */
  upsert?: InputMaybe<WorkUpsertWithNestedWhereUniqueInput>
}

export type WorkUpdateWithNestedWhereUniqueInput = {
  /** Document to update */
  data: WorkUpdateInput
  /** Unique document search */
  where: WorkWhereUniqueInput
}

export type WorkUpsertInput = {
  /** Create document if it didn't exist */
  create: WorkCreateInput
  /** Update document if it exists */
  update: WorkUpdateInput
}

export type WorkUpsertWithNestedWhereUniqueInput = {
  /** Upsert data */
  data: WorkUpsertInput
  /** Unique document search */
  where: WorkWhereUniqueInput
}

/** This contains a set of filters that can be used to compare values internally */
export type WorkWhereComparatorInput = {
  /** This field can be used to request to check if the entry is outdated by internal comparison */
  outdated_to?: InputMaybe<Scalars['Boolean']['input']>
}

/** Identifies documents */
export type WorkWhereInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkWhereInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkWhereInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkWhereInput>>
  /** Contains search across all appropriate fields. */
  _search?: InputMaybe<Scalars['String']['input']>
  companyImage?: InputMaybe<AssetWhereInput>
  companyName?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  companyName_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  companyName_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  companyName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  companyName_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  companyName_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  companyName_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  companyName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  companyName_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  companyName_starts_with?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  createdAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  createdAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  createdAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  createdAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  createdAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  createdAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  createdAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  createdBy?: InputMaybe<UserWhereInput>
  description?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  description_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  description_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  description_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  description_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  description_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  description_starts_with?: InputMaybe<Scalars['String']['input']>
  documentInStages_every?: InputMaybe<WorkWhereStageInput>
  documentInStages_none?: InputMaybe<WorkWhereStageInput>
  documentInStages_some?: InputMaybe<WorkWhereStageInput>
  employmentMode?: InputMaybe<EmploymentModes>
  /** All values that are contained in given list. */
  employmentMode_in?: InputMaybe<Array<InputMaybe<EmploymentModes>>>
  /** Any other value that exists and is not equal to the given value. */
  employmentMode_not?: InputMaybe<EmploymentModes>
  /** All values that are not contained in given list. */
  employmentMode_not_in?: InputMaybe<Array<InputMaybe<EmploymentModes>>>
  employmentType?: InputMaybe<EmploymentTypes>
  /** All values that are contained in given list. */
  employmentType_in?: InputMaybe<Array<InputMaybe<EmploymentTypes>>>
  /** Any other value that exists and is not equal to the given value. */
  employmentType_not?: InputMaybe<EmploymentTypes>
  /** All values that are not contained in given list. */
  employmentType_not_in?: InputMaybe<Array<InputMaybe<EmploymentTypes>>>
  endDate?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  endDate_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  endDate_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  endDate_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  endDate_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  endDate_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  id?: InputMaybe<Scalars['ID']['input']>
  /** All values containing the given string. */
  id_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values ending with the given string. */
  id_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are contained in given list. */
  id_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  id_not?: InputMaybe<Scalars['ID']['input']>
  /** All values not containing the given string. */
  id_not_contains?: InputMaybe<Scalars['ID']['input']>
  /** All values not ending with the given string */
  id_not_ends_with?: InputMaybe<Scalars['ID']['input']>
  /** All values that are not contained in given list. */
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>
  /** All values not starting with the given string. */
  id_not_starts_with?: InputMaybe<Scalars['ID']['input']>
  /** All values starting with the given string. */
  id_starts_with?: InputMaybe<Scalars['ID']['input']>
  industry?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  industry_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  industry_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  industry_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  industry_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  industry_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  industry_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  industry_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  industry_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  industry_starts_with?: InputMaybe<Scalars['String']['input']>
  location?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  location_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  location_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  location_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  location_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  location_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  location_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  location_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  location_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  location_starts_with?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  /** All values containing the given string. */
  name_contains?: InputMaybe<Scalars['String']['input']>
  /** All values ending with the given string. */
  name_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are contained in given list. */
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** Any other value that exists and is not equal to the given value. */
  name_not?: InputMaybe<Scalars['String']['input']>
  /** All values not containing the given string. */
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  /** All values not ending with the given string */
  name_not_ends_with?: InputMaybe<Scalars['String']['input']>
  /** All values that are not contained in given list. */
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  /** All values not starting with the given string. */
  name_not_starts_with?: InputMaybe<Scalars['String']['input']>
  /** All values starting with the given string. */
  name_starts_with?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedBy?: InputMaybe<UserWhereInput>
  scheduledIn_every?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_none?: InputMaybe<ScheduledOperationWhereInput>
  scheduledIn_some?: InputMaybe<ScheduledOperationWhereInput>
  startDate?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than the given value. */
  startDate_gt?: InputMaybe<Scalars['Date']['input']>
  /** All values greater than or equal the given value. */
  startDate_gte?: InputMaybe<Scalars['Date']['input']>
  /** All values that are contained in given list. */
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  /** All values less than the given value. */
  startDate_lt?: InputMaybe<Scalars['Date']['input']>
  /** All values less than or equal the given value. */
  startDate_lte?: InputMaybe<Scalars['Date']['input']>
  /** Any other value that exists and is not equal to the given value. */
  startDate_not?: InputMaybe<Scalars['Date']['input']>
  /** All values that are not contained in given list. */
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than the given value. */
  updatedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values greater than or equal the given value. */
  updatedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are contained in given list. */
  updatedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  /** All values less than the given value. */
  updatedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  /** All values less than or equal the given value. */
  updatedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  /** Any other value that exists and is not equal to the given value. */
  updatedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  /** All values that are not contained in given list. */
  updatedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  updatedBy?: InputMaybe<UserWhereInput>
}

/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export type WorkWhereStageInput = {
  /** Logical AND on all given filters. */
  AND?: InputMaybe<Array<WorkWhereStageInput>>
  /** Logical NOT on all given filters combined by AND. */
  NOT?: InputMaybe<Array<WorkWhereStageInput>>
  /** Logical OR on all given filters. */
  OR?: InputMaybe<Array<WorkWhereStageInput>>
  /** This field contains fields which can be set as true or false to specify an internal comparison */
  compareWithParent?: InputMaybe<WorkWhereComparatorInput>
  /** Specify the stage to compare with */
  stage?: InputMaybe<Stage>
}

/** References Work record uniquely */
export type WorkWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>
}

export enum _FilterKind {
  And = 'AND',
  Not = 'NOT',
  Or = 'OR',
  Contains = 'contains',
  ContainsAll = 'contains_all',
  ContainsNone = 'contains_none',
  ContainsSome = 'contains_some',
  EndsWith = 'ends_with',
  Eq = 'eq',
  EqNot = 'eq_not',
  Gt = 'gt',
  Gte = 'gte',
  In = 'in',
  JsonPathExists = 'json_path_exists',
  JsonValueRecursive = 'json_value_recursive',
  Lt = 'lt',
  Lte = 'lte',
  NotContains = 'not_contains',
  NotEndsWith = 'not_ends_with',
  NotIn = 'not_in',
  NotStartsWith = 'not_starts_with',
  RelationalEvery = 'relational_every',
  RelationalNone = 'relational_none',
  RelationalSingle = 'relational_single',
  RelationalSome = 'relational_some',
  Search = 'search',
  StartsWith = 'starts_with',
  UnionEmpty = 'union_empty',
  UnionEvery = 'union_every',
  UnionNone = 'union_none',
  UnionSingle = 'union_single',
  UnionSome = 'union_some'
}

export enum _MutationInputFieldKind {
  Enum = 'enum',
  Relation = 'relation',
  RichText = 'richText',
  RichTextWithEmbeds = 'richTextWithEmbeds',
  Scalar = 'scalar',
  Union = 'union',
  Virtual = 'virtual'
}

export enum _MutationKind {
  Create = 'create',
  Delete = 'delete',
  DeleteMany = 'deleteMany',
  Publish = 'publish',
  PublishMany = 'publishMany',
  SchedulePublish = 'schedulePublish',
  ScheduleUnpublish = 'scheduleUnpublish',
  Unpublish = 'unpublish',
  UnpublishMany = 'unpublishMany',
  Update = 'update',
  UpdateMany = 'updateMany',
  Upsert = 'upsert'
}

export enum _OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum _RelationInputCardinality {
  Many = 'many',
  One = 'one'
}

export enum _RelationInputKind {
  Create = 'create',
  Update = 'update'
}

export enum _RelationKind {
  Regular = 'regular',
  Union = 'union'
}

export enum _SystemDateTimeFieldVariation {
  Base = 'base',
  Combined = 'combined',
  Localization = 'localization'
}

export type GetCertificationsQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}>

export type GetCertificationsQuery = {
  __typename?: 'Query'
  certifications: Array<{
    __typename?: 'Certification'
    id: string
    slug: string
    name: string
    createdAt: any
    date: any
    url: string
    organizationName: string
    organizationImage: { __typename?: 'Asset'; url: string }
    image: { __typename?: 'Asset'; url: string }
  }>
  certificationsConnection: {
    __typename?: 'CertificationConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  allCertifications: {
    __typename?: 'CertificationConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
}

export type GetProfileResumeQueryVariables = Exact<{ [key: string]: never }>

export type GetProfileResumeQuery = {
  __typename?: 'Query'
  worksConnection: {
    __typename?: 'WorkConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  works: Array<{
    __typename?: 'Work'
    id: string
    name: string
    companyName: string
    location: string
    startDate: any
    endDate?: any | null
    industry: string
    description: string
    companyImage: { __typename?: 'Asset'; url: string }
  }>
  projectsConnection: {
    __typename?: 'ProjectConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  projects: Array<{
    __typename?: 'Project'
    id: string
    slug: string
    url: string
    name: string
    description: string
    date: any
    image: { __typename?: 'Asset'; url: string }
    technologies: Array<{
      __typename?: 'Technology'
      id: string
      name: string
      icon: { __typename?: 'Asset'; url: string }
    }>
  }>
  certificationsConnection: {
    __typename?: 'CertificationConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  certifications: Array<{
    __typename?: 'Certification'
    id: string
    slug: string
    name: string
    createdAt: any
    date: any
    url: string
    organizationName: string
    organizationImage: { __typename?: 'Asset'; url: string }
    image: { __typename?: 'Asset'; url: string }
  }>
  technologiesConnection: {
    __typename?: 'TechnologyConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  technologies: Array<{
    __typename?: 'Technology'
    name: string
    icon: { __typename?: 'Asset'; url: string }
  }>
}

export type GetProjectsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}>

export type GetProjectsQuery = {
  __typename?: 'Query'
  allProjects: {
    __typename?: 'ProjectConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  projectsConnection: {
    __typename?: 'ProjectConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  projects: Array<{
    __typename?: 'Project'
    id: string
    slug: string
    url: string
    name: string
    description: string
    date: any
    image: { __typename?: 'Asset'; url: string }
    technologies: Array<{
      __typename?: 'Technology'
      id: string
      name: string
      icon: { __typename?: 'Asset'; url: string }
    }>
  }>
}

export type GetTechnologiesQueryVariables = Exact<{ [key: string]: never }>

export type GetTechnologiesQuery = {
  __typename?: 'Query'
  technologiesConnection: {
    __typename?: 'TechnologyConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  technologies: Array<{
    __typename?: 'Technology'
    name: string
    icon: { __typename?: 'Asset'; url: string }
  }>
}

export type GetWorksQueryVariables = Exact<{ [key: string]: never }>

export type GetWorksQuery = {
  __typename?: 'Query'
  worksConnection: {
    __typename?: 'WorkConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  works: Array<{
    __typename?: 'Work'
    id: string
    name: string
    companyName: string
    location: string
    startDate: any
    endDate?: any | null
    industry: string
    description: string
    companyImage: { __typename?: 'Asset'; url: string }
  }>
}

export type SearchCertificationsByTermQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  term?: InputMaybe<Scalars['String']['input']>
}>

export type SearchCertificationsByTermQuery = {
  __typename?: 'Query'
  allCertifications: {
    __typename?: 'CertificationConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  certificationsConnection: {
    __typename?: 'CertificationConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  certifications: Array<{
    __typename?: 'Certification'
    id: string
    slug: string
    name: string
    createdAt: any
    date: any
    url: string
    organizationName: string
    organizationImage: { __typename?: 'Asset'; url: string }
    image: { __typename?: 'Asset'; url: string }
  }>
}

export type SearchProjectsByTermQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  term?: InputMaybe<Scalars['String']['input']>
}>

export type SearchProjectsByTermQuery = {
  __typename?: 'Query'
  allProjects: {
    __typename?: 'ProjectConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  projectsConnection: {
    __typename?: 'ProjectConnection'
    aggregate: { __typename?: 'Aggregate'; count: number }
  }
  projects: Array<{
    __typename?: 'Project'
    id: string
    slug: string
    url: string
    name: string
    description: string
    date: any
    image: { __typename?: 'Asset'; url: string }
    technologies: Array<{
      __typename?: 'Technology'
      id: string
      name: string
      icon: { __typename?: 'Asset'; url: string }
    }>
  }>
}

export const GetCertificationsDocument = gql`
  query GetCertifications($first: Int, $skip: Int) {
    certifications(first: $first, skip: $skip, orderBy: date_DESC) {
      id
      slug
      name
      createdAt
      date
      url
      organizationName
      organizationImage {
        url
      }
      image {
        url
      }
    }
    certificationsConnection {
      aggregate {
        count
      }
    }
    allCertifications: certificationsConnection {
      aggregate {
        count
      }
    }
  }
`

/**
 * __useGetCertificationsQuery__
 *
 * To run a query within a React component, call `useGetCertificationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCertificationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCertificationsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetCertificationsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >(GetCertificationsDocument, options)
}
export function useGetCertificationsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >(GetCertificationsDocument, options)
}
export function useGetCertificationsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetCertificationsQuery,
    GetCertificationsQueryVariables
  >(GetCertificationsDocument, options)
}
export type GetCertificationsQueryHookResult = ReturnType<
  typeof useGetCertificationsQuery
>
export type GetCertificationsLazyQueryHookResult = ReturnType<
  typeof useGetCertificationsLazyQuery
>
export type GetCertificationsSuspenseQueryHookResult = ReturnType<
  typeof useGetCertificationsSuspenseQuery
>
export type GetCertificationsQueryResult = Apollo.QueryResult<
  GetCertificationsQuery,
  GetCertificationsQueryVariables
>
export const GetProfileResumeDocument = gql`
  query GetProfileResume {
    worksConnection {
      aggregate {
        count
      }
    }
    works(orderBy: endDate_DESC) {
      id
      name
      companyName
      companyImage {
        url
      }
      location
      startDate
      endDate
      industry
      description
    }
    projectsConnection {
      aggregate {
        count
      }
    }
    projects(first: 3) {
      id
      slug
      url
      name
      description
      date
      image {
        url
      }
      technologies {
        id
        name
        icon {
          url
        }
      }
    }
    certificationsConnection {
      aggregate {
        count
      }
    }
    certifications(first: 3, orderBy: date_DESC) {
      id
      slug
      name
      createdAt
      date
      url
      organizationName
      organizationImage {
        url
      }
      image {
        url
      }
    }
    technologiesConnection {
      aggregate {
        count
      }
    }
    technologies(first: 16, orderBy: name_ASC) {
      name
      icon {
        url
      }
    }
  }
`

/**
 * __useGetProfileResumeQuery__
 *
 * To run a query within a React component, call `useGetProfileResumeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProfileResumeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProfileResumeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProfileResumeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetProfileResumeQuery,
    GetProfileResumeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetProfileResumeQuery, GetProfileResumeQueryVariables>(
    GetProfileResumeDocument,
    options
  )
}
export function useGetProfileResumeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetProfileResumeQuery,
    GetProfileResumeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetProfileResumeQuery,
    GetProfileResumeQueryVariables
  >(GetProfileResumeDocument, options)
}
export function useGetProfileResumeSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetProfileResumeQuery,
    GetProfileResumeQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetProfileResumeQuery,
    GetProfileResumeQueryVariables
  >(GetProfileResumeDocument, options)
}
export type GetProfileResumeQueryHookResult = ReturnType<
  typeof useGetProfileResumeQuery
>
export type GetProfileResumeLazyQueryHookResult = ReturnType<
  typeof useGetProfileResumeLazyQuery
>
export type GetProfileResumeSuspenseQueryHookResult = ReturnType<
  typeof useGetProfileResumeSuspenseQuery
>
export type GetProfileResumeQueryResult = Apollo.QueryResult<
  GetProfileResumeQuery,
  GetProfileResumeQueryVariables
>
export const GetProjectsDocument = gql`
  query GetProjects($limit: Int, $skip: Int) {
    allProjects: projectsConnection {
      aggregate {
        count
      }
    }
    projectsConnection {
      aggregate {
        count
      }
    }
    projects(first: $limit, skip: $skip) {
      id
      slug
      url
      name
      description
      date
      image {
        url
      }
      technologies {
        id
        name
        icon {
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
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetProjectsQuery(
  baseOptions?: Apollo.QueryHookOptions<
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
export const GetTechnologiesDocument = gql`
  query GetTechnologies {
    technologiesConnection {
      aggregate {
        count
      }
    }
    technologies(orderBy: name_ASC) {
      name
      icon {
        url
      }
    }
  }
`

/**
 * __useGetTechnologiesQuery__
 *
 * To run a query within a React component, call `useGetTechnologiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTechnologiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTechnologiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTechnologiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetTechnologiesQuery,
    GetTechnologiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetTechnologiesQuery, GetTechnologiesQueryVariables>(
    GetTechnologiesDocument,
    options
  )
}
export function useGetTechnologiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetTechnologiesQuery,
    GetTechnologiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    GetTechnologiesQuery,
    GetTechnologiesQueryVariables
  >(GetTechnologiesDocument, options)
}
export function useGetTechnologiesSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetTechnologiesQuery,
    GetTechnologiesQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    GetTechnologiesQuery,
    GetTechnologiesQueryVariables
  >(GetTechnologiesDocument, options)
}
export type GetTechnologiesQueryHookResult = ReturnType<
  typeof useGetTechnologiesQuery
>
export type GetTechnologiesLazyQueryHookResult = ReturnType<
  typeof useGetTechnologiesLazyQuery
>
export type GetTechnologiesSuspenseQueryHookResult = ReturnType<
  typeof useGetTechnologiesSuspenseQuery
>
export type GetTechnologiesQueryResult = Apollo.QueryResult<
  GetTechnologiesQuery,
  GetTechnologiesQueryVariables
>
export const GetWorksDocument = gql`
  query GetWorks {
    worksConnection {
      aggregate {
        count
      }
    }
    works(orderBy: endDate_DESC) {
      id
      name
      companyName
      companyImage {
        url
      }
      location
      startDate
      endDate
      industry
      description
    }
  }
`

/**
 * __useGetWorksQuery__
 *
 * To run a query within a React component, call `useGetWorksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorksQuery(
  baseOptions?: Apollo.QueryHookOptions<GetWorksQuery, GetWorksQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetWorksQuery, GetWorksQueryVariables>(
    GetWorksDocument,
    options
  )
}
export function useGetWorksLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetWorksQuery,
    GetWorksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetWorksQuery, GetWorksQueryVariables>(
    GetWorksDocument,
    options
  )
}
export function useGetWorksSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    GetWorksQuery,
    GetWorksQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<GetWorksQuery, GetWorksQueryVariables>(
    GetWorksDocument,
    options
  )
}
export type GetWorksQueryHookResult = ReturnType<typeof useGetWorksQuery>
export type GetWorksLazyQueryHookResult = ReturnType<
  typeof useGetWorksLazyQuery
>
export type GetWorksSuspenseQueryHookResult = ReturnType<
  typeof useGetWorksSuspenseQuery
>
export type GetWorksQueryResult = Apollo.QueryResult<
  GetWorksQuery,
  GetWorksQueryVariables
>
export const SearchCertificationsByTermDocument = gql`
  query SearchCertificationsByTerm($first: Int, $skip: Int, $term: String) {
    allCertifications: certificationsConnection {
      aggregate {
        count
      }
    }
    certificationsConnection(where: { name_contains: $term }) {
      aggregate {
        count
      }
    }
    certifications(
      first: $first
      skip: $skip
      where: { name_contains: $term }
      orderBy: date_DESC
    ) {
      id
      slug
      name
      createdAt
      date
      url
      organizationName
      organizationImage {
        url
      }
      image {
        url
      }
    }
  }
`

/**
 * __useSearchCertificationsByTermQuery__
 *
 * To run a query within a React component, call `useSearchCertificationsByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchCertificationsByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchCertificationsByTermQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSearchCertificationsByTermQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchCertificationsByTermQuery,
    SearchCertificationsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SearchCertificationsByTermQuery,
    SearchCertificationsByTermQueryVariables
  >(SearchCertificationsByTermDocument, options)
}
export function useSearchCertificationsByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchCertificationsByTermQuery,
    SearchCertificationsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SearchCertificationsByTermQuery,
    SearchCertificationsByTermQueryVariables
  >(SearchCertificationsByTermDocument, options)
}
export function useSearchCertificationsByTermSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    SearchCertificationsByTermQuery,
    SearchCertificationsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    SearchCertificationsByTermQuery,
    SearchCertificationsByTermQueryVariables
  >(SearchCertificationsByTermDocument, options)
}
export type SearchCertificationsByTermQueryHookResult = ReturnType<
  typeof useSearchCertificationsByTermQuery
>
export type SearchCertificationsByTermLazyQueryHookResult = ReturnType<
  typeof useSearchCertificationsByTermLazyQuery
>
export type SearchCertificationsByTermSuspenseQueryHookResult = ReturnType<
  typeof useSearchCertificationsByTermSuspenseQuery
>
export type SearchCertificationsByTermQueryResult = Apollo.QueryResult<
  SearchCertificationsByTermQuery,
  SearchCertificationsByTermQueryVariables
>
export const SearchProjectsByTermDocument = gql`
  query SearchProjectsByTerm($limit: Int, $skip: Int, $term: String) {
    allProjects: projectsConnection {
      aggregate {
        count
      }
    }
    projectsConnection(where: { name_contains: $term }) {
      aggregate {
        count
      }
    }
    projects(first: $limit, skip: $skip, where: { name_contains: $term }) {
      id
      slug
      url
      name
      description
      date
      image {
        url
      }
      technologies {
        id
        name
        icon {
          url
        }
      }
    }
  }
`

/**
 * __useSearchProjectsByTermQuery__
 *
 * To run a query within a React component, call `useSearchProjectsByTermQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchProjectsByTermQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchProjectsByTermQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      skip: // value for 'skip'
 *      term: // value for 'term'
 *   },
 * });
 */
export function useSearchProjectsByTermQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SearchProjectsByTermQuery,
    SearchProjectsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<
    SearchProjectsByTermQuery,
    SearchProjectsByTermQueryVariables
  >(SearchProjectsByTermDocument, options)
}
export function useSearchProjectsByTermLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SearchProjectsByTermQuery,
    SearchProjectsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SearchProjectsByTermQuery,
    SearchProjectsByTermQueryVariables
  >(SearchProjectsByTermDocument, options)
}
export function useSearchProjectsByTermSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<
    SearchProjectsByTermQuery,
    SearchProjectsByTermQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useSuspenseQuery<
    SearchProjectsByTermQuery,
    SearchProjectsByTermQueryVariables
  >(SearchProjectsByTermDocument, options)
}
export type SearchProjectsByTermQueryHookResult = ReturnType<
  typeof useSearchProjectsByTermQuery
>
export type SearchProjectsByTermLazyQueryHookResult = ReturnType<
  typeof useSearchProjectsByTermLazyQuery
>
export type SearchProjectsByTermSuspenseQueryHookResult = ReturnType<
  typeof useSearchProjectsByTermSuspenseQuery
>
export type SearchProjectsByTermQueryResult = Apollo.QueryResult<
  SearchProjectsByTermQuery,
  SearchProjectsByTermQueryVariables
>
