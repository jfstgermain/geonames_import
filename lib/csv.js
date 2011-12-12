


<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
        <title>lib/csv.js at master from voodootikigod/node-csv - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    
    

    <meta content="authenticity_token" name="csrf-param" />
<meta content="spnvR+tyU4ApZU9YVjg009v1GDTaDDSVT1e+Ru/Q3yQ=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/stylesheets/bundles/github-74801ded75693533333ef343dece5bacb90ed607.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/jquery-6bd7d190e98b26f66e07c297fcfbe5ca057cb2fa.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/javascripts/bundles/github-de3b828ac620f46e9ec91b15b79a31b23f096b2a.js" type="text/javascript"></script>
    

      <link rel='permalink' href='/voodootikigod/node-csv/blob/ac2e1360be33bb5270fb852e3d0c67b4be71610f/lib/csv.js'>
    

    <meta name="description" content="node-csv - Efficient Evented CSV Parsing in node.js" />
  <link href="https://github.com/voodootikigod/node-csv/commits/master.atom" rel="alternate" title="Recent Commits to node-csv:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux env-production  ">
    


    
    <div id="main">
      <div id="header" class="true">
          <a class="logo" href="https://github.com/">
            <img alt="github" class="default svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.svg?1315858579" />
            <img alt="github" class="default png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6.png?1315858579" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover svg" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.svg?1315858579" />
            <img alt="github" class="hover png" height="45" src="https://a248.e.akamai.net/assets.github.com/images/modules/header/logov6-hover.png?1315858579" />
            <!--<![endif]-->
          </a>

          



            <div class="userbox">
              <div class="avatarname">
                <a href="https://github.com/jfstgermain"><img height="20" src="https://secure.gravatar.com/avatar/d64c1f6bb9204e2bf67c00d7c2270401?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" /></a>
                <a href="https://github.com/jfstgermain" class="name">jfstgermain</a>
              </div>
              <ul class="usernav">
                <li><a href="https://github.com/">Dashboard</a></li>
                <li>
                  <a href="https://github.com/inbox/notifications">Inbox</a>
                  <a href="https://github.com/inbox/notifications" class="unread_count ">0</a>
                </li>
                <li><a href="https://github.com/account">Account Settings</a></li>
                <li><a href="/logout">Log Out</a></li>
              </ul>
            </div><!-- /.userbox -->



        <div class="topsearch">
<form action="/search" id="top_search_form" method="get">      <a href="/search" class="advanced-search tooltipped downwards" title="Advanced Search">Advanced Search</a>
      <div class="search placeholder-field js-placeholder-field">
        <label class="placeholder" for="global-search-field">Search…</label>
        <input type="text" class="search my_repos_autocompleter" id="global-search-field" name="q" results="5" /> <input type="submit" value="Search" class="button" />
      </div>
      <input type="hidden" name="type" value="Everything" />
      <input type="hidden" name="repo" value="" />
      <input type="hidden" name="langOverride" value="" />
      <input type="hidden" name="start_value" value="1" />
</form>    <ul class="nav">
        <li class="explore"><a href="https://github.com/explore">Explore GitHub</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
</div>

      </div>

      
            <div class="site">
      <div class="pagehead repohead vis-public   instapaper_ignore readability-menu">


      <div class="title-actions-bar">
        <h1>
          <a href="/voodootikigod">voodootikigod</a> /
          <strong><a href="/voodootikigod/node-csv" class="js-current-repository">node-csv</a></strong>
        </h1>
        



            <ul class="pagehead-actions">


        <li class="js-toggler-container watch-button-container ">
          <a href="/voodootikigod/node-csv/toggle_watch" class="minibutton btn-watch watch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Watch</span></a>
          <a href="/voodootikigod/node-csv/toggle_watch" class="minibutton btn-watch unwatch-button js-toggler-target" data-method="post" data-remote="true" rel="nofollow"><span><span class="icon"></span>Unwatch</span></a>
        </li>

            <li><a href="/voodootikigod/node-csv/fork" class="minibutton btn-fork fork-button" data-method="post" rel="nofollow"><span><span class="icon"></span>Fork</span></a></li>



      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers ">
            <a href="/voodootikigod/node-csv/watchers" title="Watchers" class="tooltipped downwards">
              38
            </a>
          </li>
          <li class="forks">
            <a href="/voodootikigod/node-csv/network" title="Forks" class="tooltipped downwards">
              7
            </a>
          </li>
        </ul>
      </li>
    </ul>

      </div>

        

  <ul class="tabs">
    <li><a href="/voodootikigod/node-csv" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/voodootikigod/node-csv/network" highlight="repo_networkrepo_fork_queue">Network</a>
    <li><a href="/voodootikigod/node-csv/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>2</span></a></li>

      <li><a href="/voodootikigod/node-csv/issues" highlight="repo_issues">Issues <span class='counter'>5</span></a></li>


    <li><a href="/voodootikigod/node-csv/graphs" highlight="repo_graphsrepo_contributors">Stats &amp; Graphs</a></li>

  </ul>

  
<div class="frame frame-center tree-finder" style="display:none"
      data-tree-list-url="/voodootikigod/node-csv/tree-list/ac2e1360be33bb5270fb852e3d0c67b4be71610f"
      data-blob-url-prefix="/voodootikigod/node-csv/blob/ac2e1360be33bb5270fb852e3d0c67b4be71610f"
    >

  <div class="breadcrumb">
    <b><a href="/voodootikigod/node-csv">node-csv</a></b> /
    <input class="tree-finder-input js-navigation-enable" type="text" name="query" autocomplete="off" spellcheck="false">
  </div>

    <div class="octotip">
      <p>
        <a href="/voodootikigod/node-csv/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever" rel="nofollow">Dismiss</a>
        <strong>Octotip:</strong> You've activated the <em>file finder</em>
        by pressing <span class="kbd">t</span> Start typing to filter the
        file list. Use <span class="kbd badmono">↑</span> and
        <span class="kbd badmono">↓</span> to navigate,
        <span class="kbd">enter</span> to view files.
      </p>
    </div>

  <table class="tree-browser" cellpadding="0" cellspacing="0">
    <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
    <tr class="js-no-results no-results" style="display: none">
      <th colspan="2">No matching files</th>
    </tr>
    <tbody class="js-results-list js-navigation-container">
    </tbody>
  </table>
</div>

<div id="jump-to-line" style="display:none">
  <h2>Jump to Line</h2>
  <form>
    <input class="textfield" type="text">
    <div class="full-button">
      <button type="submit" class="classy">
        <span>Go</span>
      </button>
    </div>
  </form>
</div>


<div class="subnav-bar">

  <ul class="actions">
    
      <li class="switcher">

        <div class="context-menu-container js-menu-container">
          <span class="text">Current branch:</span>
          <a href="#"
             class="minibutton bigger switcher context-menu-button js-menu-target js-commitish-button btn-branch repo-tree"
             data-master-branch="master"
             data-ref="master">
            <span><span class="icon"></span>master</span>
          </a>

          <div class="context-pane commitish-context js-menu-content">
            <a href="javascript:;" class="close js-menu-close"></a>
            <div class="title">Switch Branches/Tags</div>
            <div class="body pane-selector commitish-selector js-filterable-commitishes">
              <div class="filterbar">
                <div class="placeholder-field js-placeholder-field">
                  <label class="placeholder" for="context-commitish-filter-field" data-placeholder-mode="sticky">Filter branches/tags</label>
                  <input type="text" id="context-commitish-filter-field" class="commitish-filter" />
                </div>

                <ul class="tabs">
                  <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                  <li><a href="#" data-filter="tags">Tags</a></li>
                </ul>
              </div>

                <div class="commitish-item branch-commitish selector-item">
                  <h4>
                      <a href="/voodootikigod/node-csv/blob/master/lib/csv.js" data-name="master">master</a>
                  </h4>
                </div>


              <div class="no-results" style="display:none">Nothing to show</div>
            </div>
          </div><!-- /.commitish-context-context -->
        </div>

      </li>
  </ul>

  <ul class="subnav">
    <li><a href="/voodootikigod/node-csv" class="selected" highlight="repo_source">Files</a></li>
    <li><a href="/voodootikigod/node-csv/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/voodootikigod/node-csv/branches" class="" highlight="repo_branches">Branches <span class="counter">1</span></a></li>
    <li><a href="/voodootikigod/node-csv/tags" class="blank" highlight="repo_tags">Tags <span class="counter">0</span></a></li>
    <li><a href="/voodootikigod/node-csv/downloads" class="blank" highlight="repo_downloads">Downloads <span class="counter">0</span></a></li>
  </ul>

</div>

  
  
  


        

      </div><!-- /.pagehead -->

      




  
  <p class="last-commit">Latest commit to the <strong>master</strong> branch</p>

<div class="commit commit-tease js-details-container">
  <p class="commit-title ">
      <a href="/voodootikigod/node-csv/commit/ac2e1360be33bb5270fb852e3d0c67b4be71610f" class="message">update</a>
      
  </p>
  <div class="commit-meta">
    <a href="/voodootikigod/node-csv/commit/ac2e1360be33bb5270fb852e3d0c67b4be71610f" class="sha-block">commit <span class="sha">ac2e1360be</span></a>

    <div class="authorship">
      <img class="gravatar" height="20" src="https://secure.gravatar.com/avatar/fff2222d0a24009fe938bba62946201a?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png" width="20" />
      <span class="author-name"><a href="/voodootikigod">voodootikigod</a></span>
      authored <time class="js-relative-date" datetime="2010-03-08T05:41:28-08:00" title="2010-03-08 05:41:28">March 08, 2010</time>

    </div>
  </div>
</div>


  <div id="slider">

    <div class="breadcrumb" data-path="lib/csv.js/">
      <b><a href="/voodootikigod/node-csv/tree/ac2e1360be33bb5270fb852e3d0c67b4be71610f" class="js-rewrite-sha">node-csv</a></b> / <a href="/voodootikigod/node-csv/tree/ac2e1360be33bb5270fb852e3d0c67b4be71610f/lib" class="js-rewrite-sha">lib</a> / csv.js       <span style="display:none" id="clippy_2768" class="clippy-text">lib/csv.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1315867478?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_2768&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://a248.e.akamai.net/assets.github.com/flash/clippy.swf?1315867478?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_2768&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="lib/csv.js/" data-permalink-url="/voodootikigod/node-csv/blob/ac2e1360be33bb5270fb852e3d0c67b4be71610f/lib/csv.js" data-title="lib/csv.js at master from voodootikigod/node-csv - GitHub" data-type="blob">
          <ul class="big-actions">
            <li><a class="file-edit-link minibutton js-rewrite-sha" href="/voodootikigod/node-csv/edit/ac2e1360be33bb5270fb852e3d0c67b4be71610f/lib/csv.js" data-method="post"><span>Edit this file</span></a></li>
          </ul>

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://a248.e.akamai.net/assets.github.com/images/icons/txt.png?1315867479" width="16" /></span>
                <span class="mode" title="File Mode">100644</span>
                  <span>202 lines (172 sloc)</span>
                <span>5.408 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/voodootikigod/node-csv/raw/master/lib/csv.js" id="raw-url">raw</a></li>
                  <li><a href="/voodootikigod/node-csv/blame/master/lib/csv.js">blame</a></li>
                <li><a href="/voodootikigod/node-csv/commits/master/lib/csv.js" rel="nofollow">history</a></li>
              </ul>
            </div>
              <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="c1">// CSV parser for node.js that handles all standard CSV parsing and </span></div><div class='line' id='LC2'><span class="c1">// returns the data elements in a single &#39;data&#39; event emmitter. </span></div><div class='line' id='LC3'><span class="c1">// Currently the only exported function is each(filename, option),</span></div><div class='line' id='LC4'><span class="c1">// where filename is the file to process and options can have any </span></div><div class='line' id='LC5'><span class="c1">// of the following:</span></div><div class='line' id='LC6'><span class="c1">//</span></div><div class='line' id='LC7'><span class="c1">//    strDelimiter: The string to use for delimiting data elements.</span></div><div class='line' id='LC8'><span class="c1">//    headers:      If the first line of the file represents headers. </span></div><div class='line' id='LC9'><span class="c1">//                  Setting this will convert the translated array into</span></div><div class='line' id='LC10'><span class="c1">//                  an object with the headers as attributes and the</span></div><div class='line' id='LC11'><span class="c1">//                  values assigned. </span></div><div class='line' id='LC12'><span class="c1">//    readAmount:   Number of bytes to read before parsing and processing.</span></div><div class='line' id='LC13'><span class="c1">//</span></div><div class='line' id='LC14'><span class="c1">//</span></div><div class='line' id='LC15'><span class="c1">//</span></div><div class='line' id='LC16'><span class="c1">//</span></div><div class='line' id='LC17'><span class="kd">var</span> <span class="nx">fs</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;fs&quot;</span><span class="p">),</span></div><div class='line' id='LC18'>&nbsp;&nbsp;<span class="nx">sys</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;sys&quot;</span><span class="p">),</span></div><div class='line' id='LC19'>&nbsp;&nbsp;<span class="nx">events</span> <span class="o">=</span> <span class="nx">require</span><span class="p">(</span><span class="s2">&quot;events&quot;</span><span class="p">);</span></div><div class='line' id='LC20'><br/></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><span class="c1">// CSVToArray Parsing function from http://www.bennadel.com/blog/1504-Ask-Ben-Parsing-CSV-Strings-With-Javascript-Exec-Regular-Expression-Command.htm</span></div><div class='line' id='LC23'><span class="c1">// This will parse a delimited string into an array of</span></div><div class='line' id='LC24'><span class="c1">// arrays. The default delimiter is the comma, but this</span></div><div class='line' id='LC25'><span class="c1">// can be overriden in the second argument.</span></div><div class='line' id='LC26'><span class="kd">function</span> <span class="nx">CSVToArray</span><span class="p">(</span> <span class="nx">strData</span><span class="p">,</span> <span class="nx">strDelimiter</span> <span class="p">){</span></div><div class='line' id='LC27'>	<span class="c1">// Check to see if the delimiter is defined. If not,</span></div><div class='line' id='LC28'>	<span class="c1">// then default to comma.</span></div><div class='line' id='LC29'>	<span class="nx">strDelimiter</span> <span class="o">=</span> <span class="p">(</span><span class="nx">strDelimiter</span> <span class="o">||</span> <span class="s2">&quot;,&quot;</span><span class="p">);</span></div><div class='line' id='LC30'><br/></div><div class='line' id='LC31'>	<span class="c1">// Create a regular expression to parse the CSV values.</span></div><div class='line' id='LC32'>	<span class="kd">var</span> <span class="nx">objPattern</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span></div><div class='line' id='LC33'>		<span class="p">(</span></div><div class='line' id='LC34'>			<span class="c1">// Delimiters.</span></div><div class='line' id='LC35'>			<span class="s2">&quot;(\\&quot;</span> <span class="o">+</span> <span class="nx">strDelimiter</span> <span class="o">+</span> <span class="s2">&quot;|\\r?\\n|\\r|^)&quot;</span> <span class="o">+</span></div><div class='line' id='LC36'><br/></div><div class='line' id='LC37'>			<span class="c1">// Quoted fields.</span></div><div class='line' id='LC38'>			<span class="s2">&quot;(?:\&quot;([^\&quot;]*(?:\&quot;\&quot;[^\&quot;]*)*)\&quot;|&quot;</span> <span class="o">+</span></div><div class='line' id='LC39'><br/></div><div class='line' id='LC40'>			<span class="c1">// Standard fields.</span></div><div class='line' id='LC41'>			<span class="s2">&quot;([^\&quot;\\&quot;</span> <span class="o">+</span> <span class="nx">strDelimiter</span> <span class="o">+</span> <span class="s2">&quot;\\r\\n]*))&quot;</span></div><div class='line' id='LC42'>		<span class="p">),</span></div><div class='line' id='LC43'>		<span class="s2">&quot;gi&quot;</span></div><div class='line' id='LC44'>		<span class="p">);</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'><br/></div><div class='line' id='LC47'>	<span class="c1">// Create an array to hold our data. Give the array</span></div><div class='line' id='LC48'>	<span class="c1">// a default empty first row.</span></div><div class='line' id='LC49'>	<span class="kd">var</span> <span class="nx">arrData</span> <span class="o">=</span> <span class="p">[[]];</span></div><div class='line' id='LC50'>	<span class="c1">// Create an array to hold our individual pattern</span></div><div class='line' id='LC51'>	<span class="c1">// matching groups.</span></div><div class='line' id='LC52'>	<span class="kd">var</span> <span class="nx">arrMatches</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC53'>	<span class="c1">// Keep looping over the regular expression matches</span></div><div class='line' id='LC54'>	<span class="c1">// until we can no longer find a match.</span></div><div class='line' id='LC55'>	<span class="k">while</span> <span class="p">(</span><span class="nx">arrMatches</span> <span class="o">=</span> <span class="nx">objPattern</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span> <span class="nx">strData</span> <span class="p">)){</span></div><div class='line' id='LC56'>		<span class="c1">// Get the delimiter that was found.</span></div><div class='line' id='LC57'>		<span class="kd">var</span> <span class="nx">strMatchedDelimiter</span> <span class="o">=</span> <span class="nx">arrMatches</span><span class="p">[</span> <span class="mi">1</span> <span class="p">];</span></div><div class='line' id='LC58'>		<span class="c1">// Check to see if the given delimiter has a length</span></div><div class='line' id='LC59'>		<span class="c1">// (is not the start of string) and if it matches</span></div><div class='line' id='LC60'>		<span class="c1">// field delimiter. If id does not, then we know</span></div><div class='line' id='LC61'>		<span class="c1">// that this delimiter is a row delimiter.</span></div><div class='line' id='LC62'>		<span class="k">if</span> <span class="p">(</span></div><div class='line' id='LC63'>			<span class="nx">strMatchedDelimiter</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC64'>			<span class="p">(</span><span class="nx">strMatchedDelimiter</span> <span class="o">!=</span> <span class="nx">strDelimiter</span><span class="p">)</span></div><div class='line' id='LC65'>			<span class="p">){</span></div><div class='line' id='LC66'><br/></div><div class='line' id='LC67'>			<span class="c1">// Since we have reached a new row of data,</span></div><div class='line' id='LC68'>			<span class="c1">// add an empty row to our data array.</span></div><div class='line' id='LC69'>			<span class="nx">arrData</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span> <span class="p">[]</span> <span class="p">);</span></div><div class='line' id='LC70'>		<span class="p">}</span></div><div class='line' id='LC71'><br/></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'>		<span class="c1">// Now that we have our delimiter out of the way,</span></div><div class='line' id='LC74'>		<span class="c1">// let&#39;s check to see which kind of value we</span></div><div class='line' id='LC75'>		<span class="c1">// captured (quoted or unquoted).</span></div><div class='line' id='LC76'>		<span class="k">if</span> <span class="p">(</span><span class="nx">arrMatches</span><span class="p">[</span> <span class="mi">2</span> <span class="p">]){</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'>			<span class="c1">// We found a quoted value. When we capture</span></div><div class='line' id='LC79'>			<span class="c1">// this value, unescape any double quotes.</span></div><div class='line' id='LC80'>			<span class="kd">var</span> <span class="nx">strMatchedValue</span> <span class="o">=</span> <span class="nx">arrMatches</span><span class="p">[</span> <span class="mi">2</span> <span class="p">].</span><span class="nx">replace</span><span class="p">(</span></div><div class='line' id='LC81'>				<span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span> <span class="s2">&quot;\&quot;\&quot;&quot;</span><span class="p">,</span> <span class="s2">&quot;g&quot;</span> <span class="p">),</span></div><div class='line' id='LC82'>				<span class="s2">&quot;\&quot;&quot;</span></div><div class='line' id='LC83'>				<span class="p">);</span></div><div class='line' id='LC84'><br/></div><div class='line' id='LC85'>		<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'>			<span class="c1">// We found a non-quoted value.</span></div><div class='line' id='LC88'>			<span class="kd">var</span> <span class="nx">strMatchedValue</span> <span class="o">=</span> <span class="nx">arrMatches</span><span class="p">[</span> <span class="mi">3</span> <span class="p">];</span></div><div class='line' id='LC89'><br/></div><div class='line' id='LC90'>		<span class="p">}</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'>		<span class="c1">// Now that we have our value string, let&#39;s add</span></div><div class='line' id='LC94'>		<span class="c1">// it to the data array.</span></div><div class='line' id='LC95'>		<span class="nx">arrData</span><span class="p">[</span> <span class="nx">arrData</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span> <span class="p">].</span><span class="nx">push</span><span class="p">(</span> <span class="nx">strMatchedValue</span> <span class="p">);</span></div><div class='line' id='LC96'>	<span class="p">}</span></div><div class='line' id='LC97'><br/></div><div class='line' id='LC98'>	<span class="c1">// Return the parsed data.</span></div><div class='line' id='LC99'>	<span class="k">return</span><span class="p">(</span> <span class="nx">arrData</span> <span class="p">);</span></div><div class='line' id='LC100'><span class="p">}</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'><br/></div><div class='line' id='LC105'><br/></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'><br/></div><div class='line' id='LC108'><span class="nx">exports</span><span class="p">.</span><span class="nx">each</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">filename</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC109'>&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="p">(</span><span class="nx">options</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC110'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">strDelimiter</span> <span class="o">=</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">strDelimiter</span> <span class="o">||</span> <span class="s2">&quot;,&quot;</span><span class="p">);</span></div><div class='line' id='LC111'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">headers</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC112'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">position</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC113'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">readAmount</span> <span class="o">=</span> <span class="p">(</span><span class="nx">options</span><span class="p">.</span><span class="nx">readAmount</span> <span class="o">||</span> <span class="p">(</span><span class="mi">16384</span><span class="p">));</span></div><div class='line' id='LC114'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">buffer</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span><span class="p">;</span></div><div class='line' id='LC115'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fd</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC116'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">stream</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">events</span><span class="p">.</span><span class="nx">EventEmitter</span><span class="p">();</span></div><div class='line' id='LC117'>&nbsp;&nbsp;</div><div class='line' id='LC118'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">emit_row</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">row</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">CSVToArray</span><span class="p">(</span><span class="nx">row</span><span class="p">)[</span><span class="mi">0</span><span class="p">];</span> </div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s2">&quot;headers&quot;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">headers</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC122'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">headers</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">d</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC126'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC128'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC129'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stream</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s2">&quot;data&quot;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC130'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC131'>&nbsp;&nbsp;</div><div class='line' id='LC132'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">readMore</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC133'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fs</span><span class="p">.</span><span class="nx">read</span><span class="p">(</span><span class="nx">fd</span><span class="p">,</span> <span class="nx">readAmount</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="s2">&quot;utf8&quot;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">bytesRead</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span>  <span class="p">{</span></div><div class='line' id='LC135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sys</span><span class="p">.</span><span class="nx">puts</span><span class="p">(</span><span class="s2">&quot;E1&quot;</span><span class="p">);</span></div><div class='line' id='LC136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stream</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s2">&quot;error&quot;</span><span class="p">,</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fs</span><span class="p">.</span><span class="nx">close</span><span class="p">(</span><span class="nx">fd</span><span class="p">);</span></div><div class='line' id='LC138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">position</span> <span class="o">+=</span> <span class="nx">bytesRead</span><span class="p">;</span></div><div class='line' id='LC140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">+=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">buffer</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pl</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">pl</span> <span class="o">&gt;</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="p">(</span><span class="nx">pl</span> <span class="o">-</span> <span class="mi">1</span><span class="p">);</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC145'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">emit_row</span><span class="p">(</span><span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">buffer</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">[</span><span class="nx">pl</span><span class="o">-</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">bytesRead</span> <span class="o">==</span> <span class="nx">readAmount</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">readMore</span><span class="p">();</span>  </div><div class='line' id='LC151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">buffer</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">emit_row</span><span class="p">(</span><span class="nx">buffer</span><span class="p">);</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fs</span><span class="p">.</span><span class="nx">close</span><span class="p">(</span><span class="nx">fd</span><span class="p">);</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stream</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s2">&quot;end&quot;</span><span class="p">)</span></div><div class='line' id='LC157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC160'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC161'>&nbsp;&nbsp;</div><div class='line' id='LC162'>&nbsp;&nbsp;<span class="nx">fs</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="nx">filename</span><span class="p">,</span> <span class="nx">process</span><span class="p">.</span><span class="nx">O_RDONLY</span><span class="p">,</span> <span class="mi">0666</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">err</span><span class="p">,</span> <span class="nx">_fd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">err</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">sys</span><span class="p">.</span><span class="nx">puts</span><span class="p">(</span><span class="s2">&quot;Could not open the file: &quot;</span><span class="o">+</span><span class="nx">filename</span><span class="p">);</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">_fd</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fd</span> <span class="o">=</span> <span class="nx">_fd</span><span class="p">;</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">readMore</span><span class="p">();</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC169'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;</div><div class='line' id='LC171'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">stream</span><span class="p">;</span></div><div class='line' id='LC172'><span class="p">};</span></div><div class='line' id='LC173'><br/></div><div class='line' id='LC174'><span class="nx">exports</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="nx">options</span><span class="p">,</span> <span class="nx">data_listener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC175'>&nbsp;&nbsp;</div><div class='line' id='LC176'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">options</span> <span class="o">==</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data_listener</span> <span class="o">=</span> <span class="nx">options</span><span class="p">;</span></div><div class='line' id='LC178'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC179'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC180'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">data_listener</span> <span class="o">!=</span> <span class="s2">&quot;function&quot;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">Exception</span><span class="p">(</span><span class="s2">&quot;Data listener must be provided&quot;</span><span class="p">);</span></div><div class='line' id='LC182'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC183'>&nbsp;&nbsp;<span class="nx">options</span> <span class="o">=</span> <span class="p">(</span><span class="nx">options</span> <span class="o">||</span> <span class="p">{});</span></div><div class='line' id='LC184'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">stream</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">events</span><span class="p">.</span><span class="nx">EventEmitter</span><span class="p">();</span></div><div class='line' id='LC185'>&nbsp;&nbsp;<span class="nx">stream</span><span class="p">.</span><span class="nx">addListener</span><span class="p">(</span><span class="s2">&quot;data&quot;</span><span class="p">,</span> <span class="nx">data_listener</span><span class="p">);</span></div><div class='line' id='LC186'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">parts</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;\n&quot;</span><span class="p">);</span></div><div class='line' id='LC187'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">pl</span> <span class="o">=</span> <span class="nx">parts</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC188'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">headers</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC189'>&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span> <span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">pl</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">data</span> <span class="o">=</span> <span class="nx">CSVToArray</span><span class="p">(</span><span class="nx">parts</span><span class="p">[</span><span class="nx">i</span><span class="p">])[</span><span class="mi">0</span><span class="p">];</span> </div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">options</span><span class="p">[</span><span class="s2">&quot;headers&quot;</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">headers</span> <span class="o">==</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">headers</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC194'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">obj</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">i</span><span class="p">)</span> <span class="p">{</span> <span class="nx">obj</span><span class="p">[</span><span class="nx">headers</span><span class="p">[</span><span class="nx">i</span><span class="p">]]</span> <span class="o">=</span> <span class="nx">d</span><span class="p">;</span> <span class="p">});</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">data</span> <span class="o">=</span> <span class="nx">obj</span><span class="p">;</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">stream</span><span class="p">.</span><span class="nx">emit</span><span class="p">(</span><span class="s1">&#39;data&#39;</span><span class="p">,</span> <span class="nx">data</span><span class="p">);</span> </div><div class='line' id='LC201'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC202'><span class="p">};</span></div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>
    </div>

  </div>

<div class="frame frame-loading" style="display:none;" data-tree-list-url="/voodootikigod/node-csv/tree-list/ac2e1360be33bb5270fb852e3d0c67b4be71610f" data-blob-url-prefix="/voodootikigod/node-csv/blob/ac2e1360be33bb5270fb852e3d0c67b4be71610f">
  <img src="https://a248.e.akamai.net/assets.github.com/images/modules/ajax/big_spinner_336699.gif?1284681402" height="32" width="32">
</div>

    </div>

    </div>
    <!-- footer -->
    <div id="footer" >
      
  <div class="upper_footer">
     <div class="site" class="clearfix">

       <!--[if IE]><h4 id="blacktocat_ie">GitHub Links</h4><![endif]-->
       <![if !IE]><h4 id="blacktocat">GitHub Links</h4><![endif]>

       <ul class="footer_nav">
         <h4>GitHub</h4>
         <li><a href="https://github.com/about">About</a></li>
         <li><a href="https://github.com/blog">Blog</a></li>
         <li><a href="https://github.com/features">Features</a></li>
         <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
         <li><a href="https://github.com/training">Training</a></li>
         <li><a href="http://status.github.com/">Site Status</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Tools</h4>
         <li><a href="http://mac.github.com/">GitHub for Mac</a></li>
         <li><a href="http://mobile.github.com/">Issues for iPhone</a></li>
         <li><a href="https://gist.github.com">Gist: Code Snippets</a></li>
         <li><a href="http://enterprise.github.com/">GitHub Enterprise</a></li>
         <li><a href="http://jobs.github.com/">Job Board</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Extras</h4>
         <li><a href="http://shop.github.com/">GitHub Shop</a></li>
         <li><a href="http://octodex.github.com/">The Octodex</a></li>
       </ul>

       <ul class="footer_nav">
         <h4>Documentation</h4>
         <li><a href="http://help.github.com/">GitHub Help</a></li>
         <li><a href="http://developer.github.com/">Developer API</a></li>
         <li><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></li>
         <li><a href="http://pages.github.com/">GitHub Pages</a></li>
       </ul>

     </div><!-- /.site -->
  </div><!-- /.upper_footer -->

<div class="lower_footer">
  <div class="site" class="clearfix">
    <!--[if IE]><div id="legal_ie"><![endif]-->
    <![if !IE]><div id="legal"><![endif]>
      <ul>
          <li><a href="https://github.com/site/terms">Terms of Service</a></li>
          <li><a href="https://github.com/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
      </ul>

      <p>&copy; 2011 <span id="_rrt" title="0.08187s from fe6.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    </div><!-- /#legal or /#legal_ie-->

      <div class="sponsor">
        <a href="http://www.rackspace.com" class="logo">
          <img alt="Dedicated Server" height="36" src="https://a248.e.akamai.net/assets.github.com/images/modules/footer/rackspace_logo.png?v2" width="38" />
        </a>
        Powered by the <a href="http://www.rackspace.com ">Dedicated
        Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
        Computing</a> of Rackspace Hosting<span>&reg;</span>
      </div>
  </div><!-- /.site -->
</div><!-- /.lower_footer -->

    </div><!-- /#footer -->

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selection as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selection as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selection from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>

    <div class="context-overlay"></div>

    <div class="ajax-error-message">
      <p><span class="icon"></span> Something went wrong with that request. Please try again. <a href="javascript:;" class="ajax-error-dismiss">Dismiss</a></p>
    </div>

    
    
    
  </body>
</html>

