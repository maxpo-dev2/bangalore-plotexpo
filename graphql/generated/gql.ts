/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "mutation CreateLead($input: CreateLeadInput!) {\n  createLead(input: $input) {\n    name\n    id\n  }\n}": typeof types.CreateLeadDocument,
    "mutation GeneratePoster($leadId: String!) {\n  generatePoster(leadId: $leadId)\n}": typeof types.GeneratePosterDocument,
    "mutation ShareToLinkedin($leadId: String!, $text: String!) {\n  shareToLinkedin(leadId: $leadId, text: $text)\n}": typeof types.ShareToLinkedinDocument,
    "mutation UpdateLead($input: CreateLeadInput!) {\n  updateLead(input: $input) {\n    name\n    id\n  }\n}": typeof types.UpdateLeadDocument,
    "mutation UploadLeadImage($input: uploadLeadImageInput!) {\n  uploadLeadImage(input: $input)\n}": typeof types.UploadLeadImageDocument,
    "query ApplyDiscount($code: String!, $price: Float!, $projectId: String!) {\n  applyDiscount(code: $code, price: $price, projectId: $projectId) {\n    id\n    discountAmount\n    discountType\n    discountValue\n    finalPrice\n    originalPrice\n  }\n}": typeof types.ApplyDiscountDocument,
    "query GetAgendaByProject($projectId: String!) {\n  getAgendaByProject(projectId: $projectId) {\n    id\n    date\n    title\n    sessions {\n      title\n      startTime\n      endTime\n      description\n      isBreak\n      items {\n        title\n        type\n        startTime\n        endTime\n        description\n        speakers {\n          isHost\n          speaker {\n            name\n            image\n            designation\n            companyName\n          }\n        }\n      }\n    }\n  }\n}": typeof types.GetAgendaByProjectDocument,
    "query GetAvailableSlots($date: String!, $timezone: String!) {\n  getAvailableSlots(date: $date, timezone: $timezone)\n}": typeof types.GetAvailableSlotsDocument,
    "query GetExhibitorsByProject($projectId: String!) {\n  getExhibitorsByProject(projectId: $projectId) {\n    companyName\n    createdAt\n    description\n    id\n    badge\n    linkedinUrl\n    logoUrl\n    projectId\n    website\n  }\n}": typeof types.GetExhibitorsByProjectDocument,
    "query getInvestorsByProject($projectId: String!) {\n  getInvestorsByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}": typeof types.GetInvestorsByProjectDocument,
    "query GetLeadById($id: String!) {\n  getLeadById(id: $id) {\n    awardCategory\n    companyName\n    country\n    createdAt\n    createdFrom\n    email\n    id\n    industry\n    jobTitle\n    leadType\n    message\n    name\n    phone\n    price\n    projectId\n    quantity\n    paymentStatus\n    status\n    updatedAt\n    utmId\n  }\n}": typeof types.GetLeadByIdDocument,
    "query GetPackagesByProject($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    badge\n    createdAt\n    delegateType\n    discountType\n    discountValue\n    excludedFeatures\n    id\n    includedFeatures\n    packageType\n    price\n    projectId\n    status\n    subtitle\n    title\n  }\n}\n\nquery GetPackagesPriceOptions($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    id\n    price\n    discountType\n    packageType\n    delegateType\n    discountValue\n  }\n}": typeof types.GetPackagesByProjectDocument,
    "query GetParticipants($projectId: String!) {\n  getParticipants(projectId: $projectId) {\n    id\n    logo\n    name\n    participantSeqNo\n    type\n    website\n  }\n}": typeof types.GetParticipantsDocument,
    "query GetPartnersByProject($input: GetPartnersByProjectInput!) {\n  getPartnersByProject(input: $input) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    facebookUrl\n    badge\n    featured\n    hideFromParticipant\n    id\n    instagramUrl\n    linkedinUrl\n    logoUrl\n    name\n    partnerType\n    phone\n    projectId\n    seqNo\n    status\n    website\n    xUrl\n    youtubeUrl\n  }\n}": typeof types.GetPartnersByProjectDocument,
    "query getSpeakersByProject($projectId: String!) {\n  getSpeakersByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}": typeof types.GetSpeakersByProjectDocument,
    "query GetSponsorByProject($projectId: String!) {\n  getSponsorsByProject(projectId: $projectId) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    featured\n    hideFromParticipant\n    linkedinUrl\n    id\n    logoUrl\n    name\n    projectId\n    seqNo\n    status\n    type\n  }\n}": typeof types.GetSponsorByProjectDocument,
};
const documents: Documents = {
    "mutation CreateLead($input: CreateLeadInput!) {\n  createLead(input: $input) {\n    name\n    id\n  }\n}": types.CreateLeadDocument,
    "mutation GeneratePoster($leadId: String!) {\n  generatePoster(leadId: $leadId)\n}": types.GeneratePosterDocument,
    "mutation ShareToLinkedin($leadId: String!, $text: String!) {\n  shareToLinkedin(leadId: $leadId, text: $text)\n}": types.ShareToLinkedinDocument,
    "mutation UpdateLead($input: CreateLeadInput!) {\n  updateLead(input: $input) {\n    name\n    id\n  }\n}": types.UpdateLeadDocument,
    "mutation UploadLeadImage($input: uploadLeadImageInput!) {\n  uploadLeadImage(input: $input)\n}": types.UploadLeadImageDocument,
    "query ApplyDiscount($code: String!, $price: Float!, $projectId: String!) {\n  applyDiscount(code: $code, price: $price, projectId: $projectId) {\n    id\n    discountAmount\n    discountType\n    discountValue\n    finalPrice\n    originalPrice\n  }\n}": types.ApplyDiscountDocument,
    "query GetAgendaByProject($projectId: String!) {\n  getAgendaByProject(projectId: $projectId) {\n    id\n    date\n    title\n    sessions {\n      title\n      startTime\n      endTime\n      description\n      isBreak\n      items {\n        title\n        type\n        startTime\n        endTime\n        description\n        speakers {\n          isHost\n          speaker {\n            name\n            image\n            designation\n            companyName\n          }\n        }\n      }\n    }\n  }\n}": types.GetAgendaByProjectDocument,
    "query GetAvailableSlots($date: String!, $timezone: String!) {\n  getAvailableSlots(date: $date, timezone: $timezone)\n}": types.GetAvailableSlotsDocument,
    "query GetExhibitorsByProject($projectId: String!) {\n  getExhibitorsByProject(projectId: $projectId) {\n    companyName\n    createdAt\n    description\n    id\n    badge\n    linkedinUrl\n    logoUrl\n    projectId\n    website\n  }\n}": types.GetExhibitorsByProjectDocument,
    "query getInvestorsByProject($projectId: String!) {\n  getInvestorsByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}": types.GetInvestorsByProjectDocument,
    "query GetLeadById($id: String!) {\n  getLeadById(id: $id) {\n    awardCategory\n    companyName\n    country\n    createdAt\n    createdFrom\n    email\n    id\n    industry\n    jobTitle\n    leadType\n    message\n    name\n    phone\n    price\n    projectId\n    quantity\n    paymentStatus\n    status\n    updatedAt\n    utmId\n  }\n}": types.GetLeadByIdDocument,
    "query GetPackagesByProject($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    badge\n    createdAt\n    delegateType\n    discountType\n    discountValue\n    excludedFeatures\n    id\n    includedFeatures\n    packageType\n    price\n    projectId\n    status\n    subtitle\n    title\n  }\n}\n\nquery GetPackagesPriceOptions($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    id\n    price\n    discountType\n    packageType\n    delegateType\n    discountValue\n  }\n}": types.GetPackagesByProjectDocument,
    "query GetParticipants($projectId: String!) {\n  getParticipants(projectId: $projectId) {\n    id\n    logo\n    name\n    participantSeqNo\n    type\n    website\n  }\n}": types.GetParticipantsDocument,
    "query GetPartnersByProject($input: GetPartnersByProjectInput!) {\n  getPartnersByProject(input: $input) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    facebookUrl\n    badge\n    featured\n    hideFromParticipant\n    id\n    instagramUrl\n    linkedinUrl\n    logoUrl\n    name\n    partnerType\n    phone\n    projectId\n    seqNo\n    status\n    website\n    xUrl\n    youtubeUrl\n  }\n}": types.GetPartnersByProjectDocument,
    "query getSpeakersByProject($projectId: String!) {\n  getSpeakersByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}": types.GetSpeakersByProjectDocument,
    "query GetSponsorByProject($projectId: String!) {\n  getSponsorsByProject(projectId: $projectId) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    featured\n    hideFromParticipant\n    linkedinUrl\n    id\n    logoUrl\n    name\n    projectId\n    seqNo\n    status\n    type\n  }\n}": types.GetSponsorByProjectDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation CreateLead($input: CreateLeadInput!) {\n  createLead(input: $input) {\n    name\n    id\n  }\n}"): (typeof documents)["mutation CreateLead($input: CreateLeadInput!) {\n  createLead(input: $input) {\n    name\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation GeneratePoster($leadId: String!) {\n  generatePoster(leadId: $leadId)\n}"): (typeof documents)["mutation GeneratePoster($leadId: String!) {\n  generatePoster(leadId: $leadId)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation ShareToLinkedin($leadId: String!, $text: String!) {\n  shareToLinkedin(leadId: $leadId, text: $text)\n}"): (typeof documents)["mutation ShareToLinkedin($leadId: String!, $text: String!) {\n  shareToLinkedin(leadId: $leadId, text: $text)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation UpdateLead($input: CreateLeadInput!) {\n  updateLead(input: $input) {\n    name\n    id\n  }\n}"): (typeof documents)["mutation UpdateLead($input: CreateLeadInput!) {\n  updateLead(input: $input) {\n    name\n    id\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "mutation UploadLeadImage($input: uploadLeadImageInput!) {\n  uploadLeadImage(input: $input)\n}"): (typeof documents)["mutation UploadLeadImage($input: uploadLeadImageInput!) {\n  uploadLeadImage(input: $input)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query ApplyDiscount($code: String!, $price: Float!, $projectId: String!) {\n  applyDiscount(code: $code, price: $price, projectId: $projectId) {\n    id\n    discountAmount\n    discountType\n    discountValue\n    finalPrice\n    originalPrice\n  }\n}"): (typeof documents)["query ApplyDiscount($code: String!, $price: Float!, $projectId: String!) {\n  applyDiscount(code: $code, price: $price, projectId: $projectId) {\n    id\n    discountAmount\n    discountType\n    discountValue\n    finalPrice\n    originalPrice\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAgendaByProject($projectId: String!) {\n  getAgendaByProject(projectId: $projectId) {\n    id\n    date\n    title\n    sessions {\n      title\n      startTime\n      endTime\n      description\n      isBreak\n      items {\n        title\n        type\n        startTime\n        endTime\n        description\n        speakers {\n          isHost\n          speaker {\n            name\n            image\n            designation\n            companyName\n          }\n        }\n      }\n    }\n  }\n}"): (typeof documents)["query GetAgendaByProject($projectId: String!) {\n  getAgendaByProject(projectId: $projectId) {\n    id\n    date\n    title\n    sessions {\n      title\n      startTime\n      endTime\n      description\n      isBreak\n      items {\n        title\n        type\n        startTime\n        endTime\n        description\n        speakers {\n          isHost\n          speaker {\n            name\n            image\n            designation\n            companyName\n          }\n        }\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetAvailableSlots($date: String!, $timezone: String!) {\n  getAvailableSlots(date: $date, timezone: $timezone)\n}"): (typeof documents)["query GetAvailableSlots($date: String!, $timezone: String!) {\n  getAvailableSlots(date: $date, timezone: $timezone)\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetExhibitorsByProject($projectId: String!) {\n  getExhibitorsByProject(projectId: $projectId) {\n    companyName\n    createdAt\n    description\n    id\n    badge\n    linkedinUrl\n    logoUrl\n    projectId\n    website\n  }\n}"): (typeof documents)["query GetExhibitorsByProject($projectId: String!) {\n  getExhibitorsByProject(projectId: $projectId) {\n    companyName\n    createdAt\n    description\n    id\n    badge\n    linkedinUrl\n    logoUrl\n    projectId\n    website\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getInvestorsByProject($projectId: String!) {\n  getInvestorsByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}"): (typeof documents)["query getInvestorsByProject($projectId: String!) {\n  getInvestorsByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetLeadById($id: String!) {\n  getLeadById(id: $id) {\n    awardCategory\n    companyName\n    country\n    createdAt\n    createdFrom\n    email\n    id\n    industry\n    jobTitle\n    leadType\n    message\n    name\n    phone\n    price\n    projectId\n    quantity\n    paymentStatus\n    status\n    updatedAt\n    utmId\n  }\n}"): (typeof documents)["query GetLeadById($id: String!) {\n  getLeadById(id: $id) {\n    awardCategory\n    companyName\n    country\n    createdAt\n    createdFrom\n    email\n    id\n    industry\n    jobTitle\n    leadType\n    message\n    name\n    phone\n    price\n    projectId\n    quantity\n    paymentStatus\n    status\n    updatedAt\n    utmId\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetPackagesByProject($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    badge\n    createdAt\n    delegateType\n    discountType\n    discountValue\n    excludedFeatures\n    id\n    includedFeatures\n    packageType\n    price\n    projectId\n    status\n    subtitle\n    title\n  }\n}\n\nquery GetPackagesPriceOptions($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    id\n    price\n    discountType\n    packageType\n    delegateType\n    discountValue\n  }\n}"): (typeof documents)["query GetPackagesByProject($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    badge\n    createdAt\n    delegateType\n    discountType\n    discountValue\n    excludedFeatures\n    id\n    includedFeatures\n    packageType\n    price\n    projectId\n    status\n    subtitle\n    title\n  }\n}\n\nquery GetPackagesPriceOptions($projectId: String!) {\n  getPackagesByProject(projectId: $projectId) {\n    id\n    price\n    discountType\n    packageType\n    delegateType\n    discountValue\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetParticipants($projectId: String!) {\n  getParticipants(projectId: $projectId) {\n    id\n    logo\n    name\n    participantSeqNo\n    type\n    website\n  }\n}"): (typeof documents)["query GetParticipants($projectId: String!) {\n  getParticipants(projectId: $projectId) {\n    id\n    logo\n    name\n    participantSeqNo\n    type\n    website\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetPartnersByProject($input: GetPartnersByProjectInput!) {\n  getPartnersByProject(input: $input) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    facebookUrl\n    badge\n    featured\n    hideFromParticipant\n    id\n    instagramUrl\n    linkedinUrl\n    logoUrl\n    name\n    partnerType\n    phone\n    projectId\n    seqNo\n    status\n    website\n    xUrl\n    youtubeUrl\n  }\n}"): (typeof documents)["query GetPartnersByProject($input: GetPartnersByProjectInput!) {\n  getPartnersByProject(input: $input) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    facebookUrl\n    badge\n    featured\n    hideFromParticipant\n    id\n    instagramUrl\n    linkedinUrl\n    logoUrl\n    name\n    partnerType\n    phone\n    projectId\n    seqNo\n    status\n    website\n    xUrl\n    youtubeUrl\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query getSpeakersByProject($projectId: String!) {\n  getSpeakersByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}"): (typeof documents)["query getSpeakersByProject($projectId: String!) {\n  getSpeakersByProject(projectId: $projectId) {\n    companyLogo\n    companyName\n    createdAt\n    designation\n    id\n    image\n    description\n    linkedinUrl\n    name\n    projectId\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "query GetSponsorByProject($projectId: String!) {\n  getSponsorsByProject(projectId: $projectId) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    featured\n    hideFromParticipant\n    linkedinUrl\n    id\n    logoUrl\n    name\n    projectId\n    seqNo\n    status\n    type\n  }\n}"): (typeof documents)["query GetSponsorByProject($projectId: String!) {\n  getSponsorsByProject(projectId: $projectId) {\n    address\n    boothNumber\n    contactEmail\n    contactName\n    contactTitle\n    createdAt\n    description\n    featured\n    hideFromParticipant\n    linkedinUrl\n    id\n    logoUrl\n    name\n    projectId\n    seqNo\n    status\n    type\n  }\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;