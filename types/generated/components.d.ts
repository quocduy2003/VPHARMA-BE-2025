import type { Schema, Struct } from '@strapi/strapi';

export interface AboutFounderSection extends Struct.ComponentSchema {
  collectionName: 'components_about_founder_sections';
  info: {
    displayName: 'FounderSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    founders: Schema.Attribute.Relation<'oneToMany', 'api::founder.founder'>;
    title: Schema.Attribute.String;
  };
}

export interface AboutStorySection extends Struct.ComponentSchema {
  collectionName: 'components_about_story_sections';
  info: {
    displayName: 'StorySection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    items: Schema.Attribute.Component<'shared.title', true>;
    title: Schema.Attribute.String;
  };
}

export interface AboutValuesSection extends Struct.ComponentSchema {
  collectionName: 'components_about_values_sections';
  info: {
    displayName: 'ValuesSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'solution.solution-section', true>;
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

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

export interface CustomerBrandReviewSection extends Struct.ComponentSchema {
  collectionName: 'components_customer_brand_review_sections';
  info: {
    displayName: 'BrandReviewSection';
  };
  attributes: {
    eyebrow: Schema.Attribute.String;
    reviewCards: Schema.Attribute.Component<'shared.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface CustomerChallengesSection extends Struct.ComponentSchema {
  collectionName: 'components_customer_challenges_sections';
  info: {
    displayName: 'CustBlogSection';
  };
  attributes: {
    blog_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::blog-category.blog-category'
    >;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
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

export interface HomeBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_home_blog_sections';
  info: {
    displayName: 'BlogSection';
  };
  attributes: {
    blog_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-category.blog-category'
    >;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    title: Schema.Attribute.String;
  };
}

export interface HomeExperienceSection extends Struct.ComponentSchema {
  collectionName: 'components_home_experience_sections';
  info: {
    displayName: 'ExperienceSection';
  };
  attributes: {
    alt: Schema.Attribute.String;
    contents: Schema.Attribute.Component<'shared.title', true>;
    eyebrow: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeFeatureSection extends Struct.ComponentSchema {
  collectionName: 'components_home_feature_sections';
  info: {
    displayName: 'FeatureSection';
  };
  attributes: {
    description: Schema.Attribute.String;
    featureCards: Schema.Attribute.Component<'solution.solution-section', true>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSolutionCard extends Struct.ComponentSchema {
  collectionName: 'components_home_solution_cards';
  info: {
    displayName: 'SolutionCard';
  };
  attributes: {
    alt: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface HomeSolutionSection extends Struct.ComponentSchema {
  collectionName: 'components_home_solution_sections';
  info: {
    displayName: 'SolutionSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    solutionCards: Schema.Attribute.Component<'home.solution-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface PricingPlanValue extends Struct.ComponentSchema {
  collectionName: 'components_pricing_plan_values';
  info: {
    displayName: 'PlanValue';
  };
  attributes: {
    isActive: Schema.Attribute.Boolean;
    value: Schema.Attribute.String;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'BrandReviewCard';
  };
  attributes: {
    address: Schema.Attribute.Text;
    alt: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos' | 'audios' | 'files'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
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

export interface SharedFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_faq_sections';
  info: {
    displayName: 'FAQSection';
  };
  attributes: {
    questions: Schema.Attribute.Relation<'oneToMany', 'api::question.question'>;
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

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SolutionChallengesChainSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_challenges_chain_sections';
  info: {
    displayName: 'ChallengesChainSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionChallengesSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_challenges_sections';
  info: {
    displayName: 'ChallengesSection';
  };
  attributes: {
    challengeCards: Schema.Attribute.Component<'solution.tab-content', true>;
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
    alt: Schema.Attribute.String;
    contents: Schema.Attribute.Component<'shared.title', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
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

export interface SolutionCustomerExperienceSection
  extends Struct.ComponentSchema {
  collectionName: 'components_solution_customer_experience_sections';
  info: {
    displayName: 'CustomerExperienceSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'solution.solution-section', true>;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    eyebrow: Schema.Attribute.String;
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

export interface SolutionFeatureCarousel extends Struct.ComponentSchema {
  collectionName: 'components_solution_feature_carousels';
  info: {
    displayName: 'FeatureCarousel';
  };
  attributes: {
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.String;
    featureImages: Schema.Attribute.Media<'images' | 'files', true>;
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
    ctaButtons: Schema.Attribute.Component<'shared.cta-button', true>;
    description: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface SolutionIndependentSolutionCards
  extends Struct.ComponentSchema {
  collectionName: 'components_solution_independent_solution_cards';
  info: {
    displayName: 'IndependentSolutionCards';
  };
  attributes: {
    alt: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'shared.cta-button', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface SolutionIndependentSolutionSection
  extends Struct.ComponentSchema {
  collectionName: 'components_solution_independent_solution_sections';
  info: {
    displayName: 'IndependentSolutionSection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    independentSolutionCards: Schema.Attribute.Component<
      'solution.independent-solution-cards',
      true
    >;
    title: Schema.Attribute.String;
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
    eyebrow: Schema.Attribute.String;
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
    eyebrow: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SolutionSolutionSection extends Struct.ComponentSchema {
  collectionName: 'components_solution_solution_sections';
  info: {
    displayName: 'SolutionCard';
  };
  attributes: {
    alt: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'files' | 'images'>;
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
    eyebrow: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.founder-section': AboutFounderSection;
      'about.story-section': AboutStorySection;
      'about.values-section': AboutValuesSection;
      'blog.blog': BlogBlog;
      'blog.image': BlogImage;
      'blog.paragraph': BlogParagraph;
      'contact.contact-info': ContactContactInfo;
      'contact.contact-item': ContactContactItem;
      'customer.brand-review-section': CustomerBrandReviewSection;
      'customer.challenges-section': CustomerChallengesSection;
      'footer.link': FooterLink;
      'home.blog-section': HomeBlogSection;
      'home.experience-section': HomeExperienceSection;
      'home.feature-section': HomeFeatureSection;
      'home.solution-card': HomeSolutionCard;
      'home.solution-section': HomeSolutionSection;
      'pricing.plan-value': PricingPlanValue;
      'shared.card': SharedCard;
      'shared.cta-button': SharedCtaButton;
      'shared.faq-section': SharedFaqSection;
      'shared.featuresitems': SharedFeaturesitems;
      'shared.hero-section': SharedHeroSection;
      'shared.link-item': SharedLinkItem;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.seo': SharedSeo;
      'shared.social': SharedSocial;
      'shared.sub-menu': SharedSubMenu;
      'shared.title': SharedTitle;
      'solution.challenges-chain-section': SolutionChallengesChainSection;
      'solution.challenges-section': SolutionChallengesSection;
      'solution.commitment-section': SolutionCommitmentSection;
      'solution.cta-section': SolutionCtaSection;
      'solution.customer-experience-section': SolutionCustomerExperienceSection;
      'solution.feature-benefits-section': SolutionFeatureBenefitsSection;
      'solution.feature-carousel': SolutionFeatureCarousel;
      'solution.feature-grid': SolutionFeatureGrid;
      'solution.feature-section': SolutionFeatureSection;
      'solution.feature-showcase-section': SolutionFeatureShowcaseSection;
      'solution.hero-pharmacy-chain': SolutionHeroPharmacyChain;
      'solution.hero-solution': SolutionHeroSolution;
      'solution.independent-solution-cards': SolutionIndependentSolutionCards;
      'solution.independent-solution-section': SolutionIndependentSolutionSection;
      'solution.operations-standardization': SolutionOperationsStandardization;
      'solution.pharmacy-chain-feature-overview': SolutionPharmacyChainFeatureOverview;
      'solution.solution-section': SolutionSolutionSection;
      'solution.tab-content': SolutionTabContent;
      'solution.tabs': SolutionTabs;
      'solution.testimonial-section': SolutionTestimonialSection;
    }
  }
}
