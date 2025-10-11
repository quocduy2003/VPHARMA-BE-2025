import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlog extends Struct.ComponentSchema {
  collectionName: 'components_blog_blogs';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    level: Schema.Attribute.Enumeration<['H1', 'H2', 'H3']>;
    title: Schema.Attribute.String;
  };
}

export interface BlogImage extends Struct.ComponentSchema {
  collectionName: 'components_blog_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlogParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blog_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
  };
}

export interface ContactContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_infos';
  info: {
    displayName: 'ContactInfo';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    workingHours: Schema.Attribute.RichText;
  };
}

export interface ContactContactItem extends Struct.ComponentSchema {
  collectionName: 'components_contact_contact_items';
  info: {
    displayName: 'ContactItem';
  };
  attributes: {};
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    menus: Schema.Attribute.Relation<'oneToMany', 'api::menu.menu'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'BrandCard';
  };
  attributes: {
    address: Schema.Attribute.Text;
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos' | 'audios' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    displayName: 'CtaButton';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedFeaturesitems extends Struct.ComponentSchema {
  collectionName: 'components_shared_featuresitems';
  info: {
    displayName: 'Featuresitems';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    ctaButtons: Schema.Attribute.Component<'shared.cta-button', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Component<'shared.media', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_items';
  info: {
    displayName: 'LinkItem';
  };
  attributes: {
    link: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
    title: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    alt: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    displayName: 'Social';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSubMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_sub_menus';
  info: {
    displayName: 'SubMenu';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionChallengesChainSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_challenges_chain_sections';
  info: {
    displayName: 'ChallengesChainSection';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionChallengesSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_challenges_sections';
  info: {
    displayName: 'ChallengesSection';
  };
  attributes: {
    challengesCards: Schema.Attribute.Component<'solution.tab-content', true>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionCommitmentSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_commitment_sections';
  info: {
    displayName: 'CommitmentSection';
  };
  attributes: {
    contents: Schema.Attribute.Component<'solution.tab-content', true>;
    desription: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_cta_section_s';
  info: {
    displayName: 'CTASection ';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionFeatureBenefitsSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_feature_benefits_sections';
  info: {
    displayName: 'FeatureBenefitsSection';
  };
  attributes: {
    contents: Schema.Attribute.Component<'solution.tab-content', true>;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionFeatureGrid extends Struct.ComponentSchema {
  collectionName: 'components_solution_feature_grids';
  info: {
    displayName: 'FeatureGrid';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_feature_sections';
  info: {
    displayName: 'FeatureSection';
  };
  attributes: {
    description: Schema.Attribute.String;
    featureGrid: Schema.Attribute.Component<'solution.feature-grid', true>;
    tabs: Schema.Attribute.Component<'solution.tabs', true>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionFeatureShowcaseSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_feature_showcase_sections';
  info: {
    displayName: 'FeatureShowcaseSection';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'shared.media', true>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionHeroPharmacyChain extends Struct.ComponentSchema {
  collectionName: 'components_solution_hero_pharmacy_chains';
  info: {
    displayName: 'HeroPharmacyChain';
  };
  attributes: {
    alt: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'files' | 'videos', true>;
  };
}

export interface SolutionHeroSolution extends Struct.ComponentSchema {
  collectionName: 'components_solution_hero_solutions';
  info: {
    displayName: 'HeroSolution';
  };
  attributes: {
    hero: Schema.Attribute.Component<'shared.hero-section', false>;
  };
}

export interface SolutionOperationsStandardization
  extends Struct.ComponentSchema {
  collectionName: 'components_solution_operations_standardizations';
  info: {
    displayName: 'OperationsStandardization';
  };
  attributes: {
    contents: Schema.Attribute.Component<'solution.tab-content', true>;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionPharmacyChainFeatureOverview
  extends Struct.ComponentSchema {
  collectionName: 'components_solution_pharmacy_chain_feature_overviews';
  info: {
    displayName: 'PharmacyChainFeatureOverview';
  };
  attributes: {
    contentCards: Schema.Attribute.Component<'solution.feature-grid', true>;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionSolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_solution_solution_cards';
  info: {
    displayName: 'SolutionCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    introductionCards: Schema.Attribute.Component<'solution.tab-content', true>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    titleButton: Schema.Attribute.String;
  };
}

export interface SolutionSolutionSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_solution_sections';
  info: {
    displayName: 'SolutionSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    images: Schema.Attribute.Component<'shared.media', true>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionTabContent extends Struct.ComponentSchema {
  collectionName: 'components_solution_tab_contents';
  info: {
    displayName: 'Content';
  };
  attributes: {
    alt: Schema.Attribute.Text;
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionTabs extends Struct.ComponentSchema {
  collectionName: 'components_solution_tabs';
  info: {
    displayName: 'Tab';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Component<'shared.media', false>;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
  };
  attributes: {
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog': BlogBlog;
      'blog.image': BlogImage;
      'blog.paragraph': BlogParagraph;
      'contact.contact-info': ContactContactInfo;
      'contact.contact-item': ContactContactItem;
      'footer.link': FooterLink;
      'shared.card': SharedCard;
      'shared.cta-button': SharedCtaButton;
      'shared.featuresitems': SharedFeaturesitems;
      'shared.hero-section': SharedHeroSection;
      'shared.link-item': SharedLinkItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.seo': SharedSeo;
      'shared.social': SharedSocial;
      'shared.sub-menu': SharedSubMenu;
      'solution.challenges-chain-section': SolutionChallengesChainSection;
      'solution.challenges-section': SolutionChallengesSection;
      'solution.commitment-section': SolutionCommitmentSection;
      'solution.cta-section': SolutionCtaSection;
      'solution.feature-benefits-section': SolutionFeatureBenefitsSection;
      'solution.feature-grid': SolutionFeatureGrid;
      'solution.feature-section': SolutionFeatureSection;
      'solution.feature-showcase-section': SolutionFeatureShowcaseSection;
      'solution.hero-pharmacy-chain': SolutionHeroPharmacyChain;
      'solution.hero-solution': SolutionHeroSolution;
      'solution.operations-standardization': SolutionOperationsStandardization;
      'solution.pharmacy-chain-feature-overview': SolutionPharmacyChainFeatureOverview;
      'solution.solution-card': SolutionSolutionCard;
      'solution.solution-section': SolutionSolutionSection;
      'solution.tab-content': SolutionTabContent;
      'solution.tabs': SolutionTabs;
      'solution.testimonial-section': SolutionTestimonialSection;
    }
  }
}
