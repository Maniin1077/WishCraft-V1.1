
// Digital Invitation Pricing Configuration
// You can easily modify these prices as needed

export interface InvitationPriceConfig {
  name: string;
  standard: number;
  pro: number;
  emoji: string;
}

export const INVITATION_PRICING: Record<string, InvitationPriceConfig> = {
  'birthday-party': {
    name: 'Birthday Party',
    standard: 299,
    pro: 399,
    emoji: '🎂'
  },
  'wedding-ceremony': {
    name: 'Wedding Ceremony',
    standard: 599,
    pro: 799,
    emoji: '💍'
  },
  'arubadhaam-kalyanam': {
    name: 'Arubadhaam Kalyanam',
    standard: 699,
    pro: 899,
    emoji: '🌸'
  },
  'engagement': {
    name: 'Engagement',
    standard: 399,
    pro: 599,
    emoji: '💎'
  },
  'housewarming': {
    name: 'Housewarming',
    standard: 249,
    pro: 349,
    emoji: '🏠'
  },
  'anniversary-celebration': {
    name: 'Anniversary Party',
    standard: 399,
    pro: 549,
    emoji: '🎊'
  }
};

// Default pricing if invitation type is not found
export const DEFAULT_INVITATION_PRICING: InvitationPriceConfig = {
  name: 'Birthday Party',
  standard: 299,
  pro: 399,
  emoji: '🎂'
};
