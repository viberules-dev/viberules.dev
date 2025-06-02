import { createClient } from '@supabase/supabase-js'
import llmProjects from '../src/data/llm-projects.json'

// 确保环境变量已设置
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing Supabase environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey)

async function migrateData() {
  console.log('Starting data migration...')

  try {
    // 转换 JSON 数据为数据库格式
    const projectsData = llmProjects.map(project => ({
      name: project.name,
      description: project.description,
      website: project.website,
      llms_txt: project.llmsTxt,
      llms_full_txt: project.llmsFullTxt || null,
      tokens: project.tokens,
      full_tokens: project.fullTokens || null,
      category: project.category,
      is_verified: true // 现有数据标记为已验证
    }))

    // 批量插入数据
    const { data, error } = await supabase
      .from('llm_txt_projects')
      .insert(projectsData)
      .select()

    if (error) {
      console.error('Migration failed:', error)
      return
    }

    console.log(`Successfully migrated ${data.length} projects`)
    console.log('Migration completed!')

  } catch (error) {
    console.error('Migration error:', error)
  }
}

// 运行迁移
migrateData()

/*
使用方法:
1. 确保已安装依赖: npm install @supabase/supabase-js
2. 设置环境变量:
   - NEXT_PUBLIC_SUPABASE_URL
   - SUPABASE_SERVICE_ROLE_KEY
3. 运行脚本: npx tsx scripts/migrate-data.ts
*/