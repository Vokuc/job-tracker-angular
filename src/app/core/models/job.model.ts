export interface Job {
    id: string;
    company: string;
    status: 'Applied'|'Interview' | 'Rejected' | 'Offer';
    appliedDate: string;
    notes?: string;
}