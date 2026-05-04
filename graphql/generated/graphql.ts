/* eslint-disable */
/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type CreateLeadInput = {
  awardCategory?: string | null | undefined;
  companyName?: string | null | undefined;
  country?: string | null | undefined;
  createdFrom?: LeadCreatedFrom | null | undefined;
  email?: string;
  id?: string | null | undefined;
  imageUrl?: string | null | undefined;
  industry?: string | null | undefined;
  ipAddress?: string | null | undefined;
  jobTitle?: string | null | undefined;
  leadType: LeadType;
  location?: string | null | undefined;
  message?: string | null | undefined;
  name?: string;
  paidAmount?: number | null | undefined;
  phone?: string | null | undefined;
  price?: number | null | undefined;
  projectId?: string;
  quantity?: number | null | undefined;
  requestType?: string | null | undefined;
  status?: LeadStatus | null | undefined;
  utmCampaign?: string | null | undefined;
  utmContent?: string | null | undefined;
  utmId?: string | null | undefined;
  utmMedium?: string | null | undefined;
  utmSource?: string | null | undefined;
  utmTerm?: string | null | undefined;
  utmUrl?: string | null | undefined;
  utrNumber?: string | null | undefined;
};

export type DelegateType =
  | 'GROUP'
  | 'INDIVIDUAL';

export type GetPartnersByProjectInput = {
  partnerType?: PartnerType | null | undefined;
  projectId: string;
};

export type LeadCreatedFrom =
  | 'INTERNAL'
  | 'WEBSITE';

export type LeadStatus =
  | 'COLD'
  | 'CONTACTED'
  | 'HOT'
  | 'NEW'
  | 'SOLD';

export type LeadType =
  | 'AWARDS'
  | 'BROCHURE'
  | 'BUYER'
  | 'DELEGATE'
  | 'ENQUIRY'
  | 'EXHIBITOR'
  | 'FULLACCESS'
  | 'INVESTOR'
  | 'MEDIA'
  | 'ORGANIZER'
  | 'OTHER'
  | 'PARTICIPANT'
  | 'PARTNER'
  | 'SPEAKER'
  | 'SPONSOR'
  | 'TMC'
  | 'VISITOR'
  | 'WA_ENQUIRY';

export type PartnerType =
  | 'COMMUNITY'
  | 'MEDIA'
  | 'OTHER'
  | 'STRATEGIC'
  | 'SUPPORTING';

export type PaymentStatus =
  | 'CANCELLED'
  | 'PAID'
  | 'PENDING';

export type SponsorType =
  | 'BRONZE'
  | 'CONFERENCE_SESSION'
  | 'GOLD'
  | 'KNOWLEDGE'
  | 'NETWORKING'
  | 'PLATINUM'
  | 'SILVER'
  | 'STARTUP'
  | 'SUPPORTING';

export type Status =
  | 'ACTIVE'
  | 'INACTIVE'
  | 'PENDING';

export type UploadLeadImageInput = {
  base64Image?: string;
  id?: string;
  mimeType?: string;
};

export type CreateLeadMutationVariables = Exact<{
  input: CreateLeadInput;
}>;


export type CreateLeadMutation = { createLead: { name: string, id: string } };

export type GeneratePosterMutationVariables = Exact<{
  leadId: string;
}>;


export type GeneratePosterMutation = { generatePoster: string };

export type ShareToLinkedinMutationVariables = Exact<{
  leadId: string;
  text: string;
}>;


export type ShareToLinkedinMutation = { shareToLinkedin: string };

export type UpdateLeadMutationVariables = Exact<{
  input: CreateLeadInput;
}>;


export type UpdateLeadMutation = { updateLead: { name: string, id: string } };

export type UploadLeadImageMutationVariables = Exact<{
  input: UploadLeadImageInput;
}>;


export type UploadLeadImageMutation = { uploadLeadImage: string };

export type ApplyDiscountQueryVariables = Exact<{
  code: string;
  price: number;
  projectId: string;
}>;


export type ApplyDiscountQuery = { applyDiscount: { id: string, discountAmount: number, discountType: string, discountValue: number, finalPrice: number, originalPrice: number } };

export type GetAgendaByProjectQueryVariables = Exact<{
  projectId: string;
}>;


export type GetAgendaByProjectQuery = { getAgendaByProject: Array<{ id: string, date: unknown, title: string, sessions: Array<{ title: string, startTime: string | null, endTime: string | null, description: string | null, isBreak: boolean | null, items: Array<{ title: string, type: string, startTime: string, endTime: string, description: string | null, speakers: Array<{ isHost: boolean, speaker: { name: string, image: string, designation: string, companyName: string } }> | null }> | null }> | null }> };

export type GetAvailableSlotsQueryVariables = Exact<{
  date: string;
  timezone: string;
}>;


export type GetAvailableSlotsQuery = { getAvailableSlots: Array<string> };

export type GetExhibitorsByProjectQueryVariables = Exact<{
  projectId: string;
}>;


export type GetExhibitorsByProjectQuery = { getExhibitorsByProject: Array<{ companyName: string, createdAt: unknown, description: string | null, id: string, badge: string | null, linkedinUrl: string | null, logoUrl: string | null, projectId: string, website: string | null }> };

export type GetInvestorsByProjectQueryVariables = Exact<{
  projectId: string;
}>;


export type GetInvestorsByProjectQuery = { getInvestorsByProject: Array<{ companyLogo: string | null, companyName: string, createdAt: unknown, designation: string, id: string, image: string, description: string | null, linkedinUrl: string | null, name: string, projectId: string }> };

export type GetLeadByIdQueryVariables = Exact<{
  id: string;
}>;


export type GetLeadByIdQuery = { getLeadById: { awardCategory: string | null, companyName: string | null, country: string | null, createdAt: unknown, createdFrom: LeadCreatedFrom | null, email: string, id: string, industry: string | null, jobTitle: string | null, leadType: LeadType, message: string | null, name: string, phone: string | null, price: number | null, projectId: string, quantity: number | null, paymentStatus: PaymentStatus | null, status: LeadStatus, updatedAt: unknown, utmId: string | null } };

export type GetPackagesByProjectQueryVariables = Exact<{
  projectId: string;
}>;


export type GetPackagesByProjectQuery = { getPackagesByProject: Array<{ badge: string | null, createdAt: unknown, delegateType: DelegateType | null, discountType: string | null, discountValue: number | null, excludedFeatures: Array<string> | null, id: string, includedFeatures: Array<string>, packageType: LeadType, price: number | null, projectId: string, status: Status, subtitle: string | null, title: string }> };

export type GetPackagesPriceOptionsQueryVariables = Exact<{
  projectId: string;
}>;


export type GetPackagesPriceOptionsQuery = { getPackagesByProject: Array<{ id: string, price: number | null, discountType: string | null, packageType: LeadType, delegateType: DelegateType | null, discountValue: number | null }> };

export type GetParticipantsQueryVariables = Exact<{
  projectId: string;
}>;


export type GetParticipantsQuery = { getParticipants: Array<{ id: string, logo: string, name: string, participantSeqNo: number | null, type: string, website: string | null }> };

export type GetPartnersByProjectQueryVariables = Exact<{
  input: GetPartnersByProjectInput;
}>;


export type GetPartnersByProjectQuery = { getPartnersByProject: Array<{ address: string | null, boothNumber: string | null, contactEmail: string | null, contactName: string | null, contactTitle: string | null, createdAt: unknown, description: string | null, facebookUrl: string | null, badge: string | null, featured: boolean, hideFromParticipant: boolean, id: string, instagramUrl: string | null, linkedinUrl: string | null, logoUrl: string | null, name: string, partnerType: PartnerType, phone: string | null, projectId: string, seqNo: number, status: Status, website: string, xUrl: string | null, youtubeUrl: string | null }> };

export type GetSpeakersByProjectQueryVariables = Exact<{
  projectId: string;
}>;


export type GetSpeakersByProjectQuery = { getSpeakersByProject: Array<{ companyLogo: string | null, companyName: string, createdAt: unknown, designation: string, id: string, image: string, description: string | null, linkedinUrl: string | null, name: string, projectId: string }> };

export type GetSponsorByProjectQueryVariables = Exact<{
  projectId: string;
}>;


export type GetSponsorByProjectQuery = { getSponsorsByProject: Array<{ address: string | null, boothNumber: string | null, contactEmail: string | null, contactName: string | null, contactTitle: string | null, createdAt: unknown, description: string | null, featured: boolean, hideFromParticipant: boolean, linkedinUrl: string | null, id: string, logoUrl: string, name: string, projectId: string, seqNo: number, status: Status, type: SponsorType }> };


export const CreateLeadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateLead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLeadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createLead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateLeadMutation, CreateLeadMutationVariables>;
export const GeneratePosterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GeneratePoster"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"leadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"generatePoster"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"leadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"leadId"}}}]}]}}]} as unknown as DocumentNode<GeneratePosterMutation, GeneratePosterMutationVariables>;
export const ShareToLinkedinDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ShareToLinkedin"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"leadId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"text"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shareToLinkedin"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"leadId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"leadId"}}},{"kind":"Argument","name":{"kind":"Name","value":"text"},"value":{"kind":"Variable","name":{"kind":"Name","value":"text"}}}]}]}}]} as unknown as DocumentNode<ShareToLinkedinMutation, ShareToLinkedinMutationVariables>;
export const UpdateLeadDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateLead"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateLeadInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateLead"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<UpdateLeadMutation, UpdateLeadMutationVariables>;
export const UploadLeadImageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UploadLeadImage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uploadLeadImageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uploadLeadImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}]}]}}]} as unknown as DocumentNode<UploadLeadImageMutation, UploadLeadImageMutationVariables>;
export const ApplyDiscountDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApplyDiscount"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"price"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applyDiscount"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"price"},"value":{"kind":"Variable","name":{"kind":"Name","value":"price"}}},{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"discountAmount"}},{"kind":"Field","name":{"kind":"Name","value":"discountType"}},{"kind":"Field","name":{"kind":"Name","value":"discountValue"}},{"kind":"Field","name":{"kind":"Name","value":"finalPrice"}},{"kind":"Field","name":{"kind":"Name","value":"originalPrice"}}]}}]}}]} as unknown as DocumentNode<ApplyDiscountQuery, ApplyDiscountQueryVariables>;
export const GetAgendaByProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgendaByProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAgendaByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"sessions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"isBreak"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"speakers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"isHost"}},{"kind":"Field","name":{"kind":"Name","value":"speaker"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"designation"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAgendaByProjectQuery, GetAgendaByProjectQueryVariables>;
export const GetAvailableSlotsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAvailableSlots"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"date"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"timezone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAvailableSlots"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"date"},"value":{"kind":"Variable","name":{"kind":"Name","value":"date"}}},{"kind":"Argument","name":{"kind":"Name","value":"timezone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"timezone"}}}]}]}}]} as unknown as DocumentNode<GetAvailableSlotsQuery, GetAvailableSlotsQueryVariables>;
export const GetExhibitorsByProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetExhibitorsByProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getExhibitorsByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinUrl"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]} as unknown as DocumentNode<GetExhibitorsByProjectQuery, GetExhibitorsByProjectQueryVariables>;
export const GetInvestorsByProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInvestorsByProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInvestorsByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"designation"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<GetInvestorsByProjectQuery, GetInvestorsByProjectQueryVariables>;
export const GetLeadByIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLeadById"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getLeadById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"awardCategory"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"country"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdFrom"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"industry"}},{"kind":"Field","name":{"kind":"Name","value":"jobTitle"}},{"kind":"Field","name":{"kind":"Name","value":"leadType"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"quantity"}},{"kind":"Field","name":{"kind":"Name","value":"paymentStatus"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"utmId"}}]}}]}}]} as unknown as DocumentNode<GetLeadByIdQuery, GetLeadByIdQueryVariables>;
export const GetPackagesByProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPackagesByProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPackagesByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"delegateType"}},{"kind":"Field","name":{"kind":"Name","value":"discountType"}},{"kind":"Field","name":{"kind":"Name","value":"discountValue"}},{"kind":"Field","name":{"kind":"Name","value":"excludedFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"includedFeatures"}},{"kind":"Field","name":{"kind":"Name","value":"packageType"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<GetPackagesByProjectQuery, GetPackagesByProjectQueryVariables>;
export const GetPackagesPriceOptionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPackagesPriceOptions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPackagesByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discountType"}},{"kind":"Field","name":{"kind":"Name","value":"packageType"}},{"kind":"Field","name":{"kind":"Name","value":"delegateType"}},{"kind":"Field","name":{"kind":"Name","value":"discountValue"}}]}}]}}]} as unknown as DocumentNode<GetPackagesPriceOptionsQuery, GetPackagesPriceOptionsQueryVariables>;
export const GetParticipantsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetParticipants"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getParticipants"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"participantSeqNo"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"website"}}]}}]}}]} as unknown as DocumentNode<GetParticipantsQuery, GetParticipantsQueryVariables>;
export const GetPartnersByProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPartnersByProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetPartnersByProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPartnersByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"boothNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"contactTitle"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"facebookUrl"}},{"kind":"Field","name":{"kind":"Name","value":"badge"}},{"kind":"Field","name":{"kind":"Name","value":"featured"}},{"kind":"Field","name":{"kind":"Name","value":"hideFromParticipant"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"instagramUrl"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinUrl"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"partnerType"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"seqNo"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"website"}},{"kind":"Field","name":{"kind":"Name","value":"xUrl"}},{"kind":"Field","name":{"kind":"Name","value":"youtubeUrl"}}]}}]}}]} as unknown as DocumentNode<GetPartnersByProjectQuery, GetPartnersByProjectQueryVariables>;
export const GetSpeakersByProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSpeakersByProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSpeakersByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"companyLogo"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"designation"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<GetSpeakersByProjectQuery, GetSpeakersByProjectQueryVariables>;
export const GetSponsorByProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSponsorByProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSponsorsByProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"projectId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"projectId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"boothNumber"}},{"kind":"Field","name":{"kind":"Name","value":"contactEmail"}},{"kind":"Field","name":{"kind":"Name","value":"contactName"}},{"kind":"Field","name":{"kind":"Name","value":"contactTitle"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"featured"}},{"kind":"Field","name":{"kind":"Name","value":"hideFromParticipant"}},{"kind":"Field","name":{"kind":"Name","value":"linkedinUrl"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}},{"kind":"Field","name":{"kind":"Name","value":"seqNo"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"type"}}]}}]}}]} as unknown as DocumentNode<GetSponsorByProjectQuery, GetSponsorByProjectQueryVariables>;