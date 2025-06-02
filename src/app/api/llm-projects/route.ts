import { NextRequest, NextResponse } from 'next/server'
import { supabase, type CreateLlmTxtProject } from '../../../../lib/supabase'

// GET - 获取所有已验证的项目
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('public_llm_txt_projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// POST - 创建新项目（需要后续验证）
export async function POST(request: NextRequest) {
  try {
    const body: CreateLlmTxtProject = await request.json()

    // 基本验证
    if (!body.name || !body.description || !body.website || !body.llms_txt) {
      return NextResponse.json(
        { error: 'Name, description, website, and llms_txt are required' },
        { status: 400 }
      )
    }

    // 验证 URL 格式
    try {
      new URL(body.website)
      new URL(body.llms_txt)
      if (body.llms_full_txt) {
        new URL(body.llms_full_txt)
      }
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('llm_txt_projects')
      .insert([{
        ...body,
        is_verified: false // 新提交的项目需要验证
      }])
      .select()
      .single()

    if (error) {
      if (error.code === '23505') { // Unique constraint violation
        return NextResponse.json(
          { error: 'A project with this name already exists' },
          { status: 409 }
        )
      }
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ data }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid JSON or internal server error' },
      { status: 500 }
    )
  }
}