// Mapeo de artículos a imágenes de Unsplash relacionadas con plantas
export const articleImages: Record<string, string> = {
  // Problemas
  'hojas-amarillas-pothos': 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80',
  'eliminar-plagas-plantas-interior': 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=800&q=80',
  'por-que-se-caen-hojas-planta': 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80',
  'manchas-marrones-hojas-plantas': 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
  'hongos-plantas-interior': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
  'raices-podridas-como-salvar-planta': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  'hojas-secas-puntas-marrones': 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80',
  'planta-no-crece-causas': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
  'mosquitos-tierra-plantas': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
  
  // Guías
  'riego-ficus-benjamina': 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=800&q=80',
  'cuidar-monstera-deliciosa': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
  'como-trasplantar-plantas-interior': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  'como-hacer-esquejes-propagar-plantas': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
  'abono-fertilizante-plantas-interior': 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80',
  'cuidar-suculentas-interior': 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80',
  'cuidar-orquideas-casa': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80',
  'cuidar-cactus-interior': 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=800&q=80',
  'riego-plantas-interior-guia-completa': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  'luz-plantas-interior': 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80',
  'humedad-plantas-tropicales': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
  'sustrato-tierra-plantas-interior': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  'poda-plantas-interior': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
  
  // Tipos
  'plantas-interior-sin-luz': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
  'plantas-interior-faciles-principiantes': 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80',
  'plantas-interior-purifican-aire': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
  'mejores-plantas-bano': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
  'plantas-interior-gatos-perros': 'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=800&q=80',
  'plantas-dormitorio-oxigeno': 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80',
  'plantas-cocina-interior': 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=800&q=80',
  'plantas-grandes-interior': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80',
  'plantas-colgantes-interior': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80',
};

export function getArticleImage(slug: string): string {
  return articleImages[slug] || 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80';
}
