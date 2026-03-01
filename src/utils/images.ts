// Imágenes específicas de Unsplash para cada artículo
export const articleImages: Record<string, string> = {
  // Problemas - imágenes específicas de problemas en plantas
  'hojas-amarillas-pothos': 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80', // Hoja amarilla
  'eliminar-plagas-plantas-interior': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', // Manos cuidando planta
  'por-que-se-caen-hojas-planta': 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&q=80', // Planta con hojas caídas
  'manchas-marrones-hojas-plantas': 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80', // Hoja con daño
  'hongos-plantas-interior': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80', // Planta enferma
  'raices-podridas-como-salvar-planta': 'https://images.unsplash.com/photo-1586864389199-5486b3abd616?w=800&q=80', // Raíces
  'hojas-secas-puntas-marrones': 'https://images.unsplash.com/photo-1558603668-6570496b66f8?w=800&q=80', // Planta seca
  'planta-no-crece-causas': 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80', // Planta pequeña
  'mosquitos-tierra-plantas': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80',
  
  // Guías - imágenes de cuidados específicos
  'riego-ficus-benjamina': 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80', // Ficus
  'cuidar-monstera-deliciosa': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80', // Monstera grande
  'como-trasplantar-plantas-interior': 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80', // Manos trasplantando
  'como-hacer-esquejes-propagar-plantas': 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&q=80', // Esquejes en agua
  'abono-fertilizante-plantas-interior': 'https://images.unsplash.com/photo-1610768764270-790fbec18178?w=800&q=80', // Fertilizante
  'cuidar-suculentas-interior': 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80', // Suculentas variadas
  'cuidar-orquideas-casa': 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80', // Orquídea blanca
  'cuidar-cactus-interior': 'https://images.unsplash.com/photo-1509587584298-0f3b3a3a1797?w=800&q=80', // Cactus en maceta
  'riego-plantas-interior-guia-completa': 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&q=80', // Regadera
  'luz-plantas-interior': 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80', // Planta en ventana
  'humedad-plantas-tropicales': 'https://images.unsplash.com/photo-1545239705-1564e58b9e4a?w=800&q=80', // Pulverizador
  'sustrato-tierra-plantas-interior': 'https://images.unsplash.com/photo-1586864387634-0b68659a8c95?w=800&q=80', // Tierra maceta
  'poda-plantas-interior': 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80', // Tijeras podando
  
  // Tipos - imágenes específicas por ubicación/característica
  'plantas-interior-sin-luz': 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=800&q=80', // Sansevieria sombra
  'plantas-interior-faciles-principiantes': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80', // Pothos
  'plantas-interior-purifican-aire': 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80', // Varias plantas
  'mejores-plantas-bano': 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80', // Baño con plantas
  'plantas-interior-gatos-perros': 'https://images.unsplash.com/photo-1615497001839-b0a0eac3274c?w=800&q=80', // Gato con planta
  'plantas-dormitorio-oxigeno': 'https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=800&q=80', // Dormitorio plantas
  'plantas-cocina-interior': 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80', // Cocina hierbas
  'plantas-grandes-interior': 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80', // Monstera grande
  'plantas-colgantes-interior': 'https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=800&q=80', // Planta colgante
};

export function getArticleImage(slug: string): string {
  return articleImages[slug] || 'https://images.unsplash.com/photo-1463154545680-d59320fd685d?w=800&q=80';
}
